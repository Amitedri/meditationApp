const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const dot = require('dotenv').config();
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//usermodel
const { userModel } = require('../DB');
//////////////
console.log(process.env.PORT);
const port = process.env.PORT || 5000;

const isUserExistOnDB = async (username) => {
  const user = await userModel.findOne({ username: username });
  return user;
};
const validateCredentials = async (username, password) => {
  const isValidData = await userModel.findOne({ username: username }).and({ password: password });
  return isValidData;
};
// app.get('/',(req,res)=>{
//   console.log('out')
// })
app.route('/register').post(async (req, res, next) => {
  try {
    if (req.body.username && req.body.password) {
      const { username, password } = req.body;
      if (typeof username === 'string' && typeof password === 'string') {
        const isUserNameAvailable = await isUserExistOnDB(username);

        if (isUserNameAvailable !== null) {
          return res.status(200).send({
            success: false,
            message: 'This username is taken please select different username.',
          });
        }
        let tokenValue;
        const signUser = jwt.sign({ username: username }, process.env.SECRET, { expiresIn: '1h' }, (err, token) => {
          console.log(token);
          if (err) {
            return res.status(200).send({
              success: false,
              message: 'Something went wrong,please try again.',
            });
          }
          return (tokenValue = [...token]);
        });
        const newUser = await new userModel({ username, password }).save();
        return res.status(200).send({
          success: true,
          message: 'Your Account was succesfully created.',
          token: tokenValue.join(''),
        });
      }
    }
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: 'Oooops....Please try again later.',
    });
  }
});

app.route('/login').post(async (req, res) => {
  try {
    if (req.body.username && req.body.password) {
      const { username, password } = req.body;
      if (typeof username === 'string' && typeof password === 'string') {
        const isAuth = await validateCredentials(username, password);
        if (isAuth === null) {
          return res.status(200).send({
            success: false,
            message: 'Please check your username or password.',
          });
        }

        const signUser = jwt.sign({ username: username }, process.env.SECRET, { expiresIn: '1h' }, (err, token) => {
          if (err) {
            return res.status(200).send({
              success: false,
              message: 'Something went wrong,please try again.',
            });
          }
          console.log(isAuth)
          return res.status(200).send({
            success: true,
            message: 'Logged in successfully.',
            token: token,
            data: isAuth.sessions,
          });
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

app.route('/sessions').put(async (req, res, next) => {
  jwt.verify(req.body.token, process.env.SECRET, async (err, decoded) => {
    if (err) {
      return res.status(200).send({
        success: false,
        message: 'Something went wrong,please try again.',
      });
    };
    const userToUpdate = await userModel.findOneAndUpdate({ username: decoded.username }, { $push: { sessions: req.body.result } }, (err, success) => {
      if (err) {
        return res.status(200).send({
          success: false,
          message: 'Something went wrong,please try again.',
        });
      }
    });
  });
});
app.listen(port, async () => {
  const connection = await mongoose.connect(
    'mongodb://127.0.0.1:27017/myapp',
    { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
    () => {
      console.log('db connected');
    }
  );
  console.log(`server running on port ${port}`);
});
