const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const dot = require('dotenv').config();
const meditationRoutes = require('./meditationRoutes');

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const port = process.env.PORT || 5000;

app.use('/meditate', meditationRoutes);

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
