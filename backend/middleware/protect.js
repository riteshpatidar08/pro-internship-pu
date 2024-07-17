const jwt = require('jsonwebtoken');
const User = require('./../Model/userModel')
const protect =async (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth && auth.startsWith('Bearer')) {
    try {
      const token = auth.split(' ')[1];

   const decoded =    jwt.verify(token, 'this-is-my-private-key');
   const {id ,role } = decoded 

const user = await User.findById(id) ;
console.log(user)
   console.log(decoded)
   req.user = user ;
      next();
    } catch (error) {
      return res.status(401).json({
        message: 'Token is not valid',
      });
    }
  } else {
    res.status(401).json({
      message: 'No token provided',
    });
  }
};

module.exports = protect;
