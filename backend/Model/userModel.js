const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },

  email: {
    type: String,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Please enter a Valid Email',
    },
  },

  password: {
    type: String,
    validate: {
      validator: function (v) {
        return validator.isStrongPassword(v, {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        });
      },
      message:
        'Password must Contain atleast 1 Special Character , 1 lower Case , 1 uppercase , 1 number',
    },
  },
 role : {
    type : String ,
    enum : ['admin' , 'user'],
    default : 'admin'
 }
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
