const express = require('express');
const app = express() ;
require('dotenv').config()
const mongoose = require('mongoose') ;
const errorHandler = require('./middleware/errorHandler')
const userRoutes = require('./routes/userRoutes');
const morgan = require('morgan')
const productRoutes = require('./routes/productRoutes')
mongoose.connect('mongodb://localhost:27017/shopping').then(()=>{
    console.log('DB connection successfull')
})

app.use(morgan('tiny'));
app.use(express.json());
app.use('/uploads', express.static('uploads'));




app.use('/api', userRoutes);
app.use('/api', productRoutes)

app.use(errorHandler);

app.listen(process.env.PORT,()=>{
console.log(`Server is running on the ${process.env.PORT}`)
})