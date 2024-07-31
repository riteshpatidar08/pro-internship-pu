const express =require('express') ;

const router= express.Router() ;
const productController = require('./../controllers/productController')
const upload= require('./../middleware/upload') ;
const protect = require('../middleware/protect');
const admin = require('../middleware/admin')

router.post('/createproduct', upload.single('image'), protect, admin,  productController.createProduct)
router.get('/getproducts', protect, productController.getAllProducts )
router.delete('/deleteProduct/:id' , protect , admin , productController.deleteProduct)

module.exports = router ;


req.file = {
    path : /uploads/dskfjdlkfjkdsjf
}


htpp://loclahost:8000/uploads/dsjflkdsajfk