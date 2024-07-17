const User = require('./../Model/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;

    const ifuserExists = await User.find({ email });
    console.log(ifuserExists);

    if (ifuserExists.length > 0) {
      const error = new Error('email already exists');
      throw error;
    }
   
    const user = await User.create(req.body)

    res.status(201).json({
      user,
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //1st we have to check the user is registered or not
    const [user] = await User.find({ email });
    console.log(user);
    if (!user) {
      const error = new Error(`User is not registered , Please Sign up`);

      throw error;
    }
    //2nd we have to check if password is matched
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      const error = new Error(`Password did not matched`);

      throw error;
    }

    //if both the condition fulfilled we have to generate a token and send it to the frontend

    const token = jwt.sign({ name: user.name , role : user.role , id : user._id}, 'this-is-my-private-key', {
      expiresIn: '10d',
    });

    res.json({
      message: 'Login successfully',
      token,
     
    });
  } catch (error) {
    next(error);
  }
};



