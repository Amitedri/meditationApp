const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { userModel } = require('../DB');

const isUserExistOnDB = async (username) => {
  const user = await userModel.findOne({ username: username });
  return user;
};
const validateCredentials = async (username, password) => {
  const isValidData = await userModel.findOne({ username: username }).and({ password: password });
  return isValidData;
};
router.route('/register').post(async (req, res, next) => {
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
    //Fallback
    return res.status(500).send({
      success: false,
      message: 'Oooops....Please try again later.',
    });
  } catch (err) {
   console.log(err)
  }
});

router.route('/login').post(async (req, res) => {
  try {
    if (req.body.username && req.body.password) {
      const { username, password } = req.body;
      if (typeof username === 'string' && typeof password === 'string') {
        const validatedUser = await validateCredentials(username, password);
        if (validatedUser === null) {
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
          return res.status(200).send({
            success: true,
            message: 'Logged in successfully.',
            token: token,
            data: validatedUser.sessions,
          });
        });
      }
    }
    //Fallback
    return res.status(200).send({
      success: false,
      message: 'Something went wrong,please try again.',
    });
  } catch (err) {
    console.log(err);
  }
});

router.route('/sessions').put(async (req, res, next) => {
  jwt.verify(req.body.token, process.env.SECRET, async (err, decoded) => {
    if (err) {
      return res.status(200).send({
        success: false,
        message: 'Something went wrong,please try again.',
      });
    }
    const userToUpdate = await userModel.findOneAndUpdate({ username: decoded.username }, { $push: { sessions: req.body.result } }, (err, success) => {
      if (err) {
        return res.status(200).send({
          success: false,
          message: 'Something went wrong,please try again.',
        });
      }
    });
  });
  //Fallback
  return res.status(200).send({
    success: false,
    message: 'Something went wrong,please try again.',
  });
});

module.exports = router;