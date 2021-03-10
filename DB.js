const mongoose = require('mongoose');

const userScheme = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    sessions: {
      type:Array,
      default:[]
    },
  },
  { timestamps: true }
);

exports.userModel = mongoose.model('user', userScheme);
