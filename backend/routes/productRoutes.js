const express =require('express') ;

const router= express.Router() ;
const productController = require('./../controllers/productController')
const upload= require('./../middleware/upload') ;
const protect = require('../middleware/protect');
const admin = require('../middleware/admin')

router.post('/createproduct', upload.single('image'), protect, admin,  productController.createProduct)


module.exports = router ;


