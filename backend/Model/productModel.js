const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const productSchema  = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "A Product must have a name"]
    },
    category : {
        type  : String ,
        required : [true , "A Prdouct must have a category"]
    },
    image : {
        type  : String ,
    },
    new_price : {
        type : Number ,

    },
    old_price : {
        type : Number
    }
})

const Product = mongoose.model("Product" , productSchema)

module.exports = Product