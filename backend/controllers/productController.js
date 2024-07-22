const Product = require('./../Model//productModel') ;

exports.createProduct = async (req, res, next) => {
  try {
    console.log(req.body);
const {name ,  category , new_price , old_price } = req.body
    console.log(req.file);
    const image = req.file.path;
    const product = await Product.create({
      name: name,
     category : category,
      new_price : new_price,
      old_price,
      image: image,
      // image,
    });

    res.status(201).json({
      product,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllProducts = async(req,res,next) => {
  try{
    const products = await Product.find()
res.status(200).json({
  products
})
  }catch{

  }
}

exports.deleteProduct = async(req,res,next)=>{
   const {id} = req.params ;
    const product = await Product.findByIdAndDelete(id) ;
   
      res.status(200).json({
        message : "Product deleted Successfully"
      })
}
