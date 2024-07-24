import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios' ;

const initialState = {
    products : [] ,
    loading : false ,
    error : null
}

export const fetchProducts = createAsyncThunk('/fetchProducts', async(_ , {rejectWithValue})=> {
    try {
        const response = await axios.get('http://localhost:8000/api/getproducts', {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response.data.products
    } catch (error) {
        rejectWithValue(error)
    }
})

export const deleteProduct = createAsyncThunk('/deleteProdcut', async(id ,{rejectWithValue})=>{
    try{
const res = await axios.delete(`http://localhost:8000/api/deleteProduct/${id}`, {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
    }catch(error){
rejectWithValue(error)
    }
})

export const addProduct = createAsyncThunk('/addProduct', async(productData ,{rejectWithValue})=>{
 try {
    const formData = new FormData() ;
    formData.append('name', productData.name);
    formData.append('category', productData.category)
    formData.append('image' , productData.image[0])
    formData.append('new_price', productData.new_price)
    formData.append("old_price", productData.old_price)
    
    const response = await axios.post('http://localhost:8000/api/createProduct', formData ,  {  headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }})

            return response.data.product
 } catch (error) {
    
 }
})

const productSlice  = createSlice({
    name : 'product',
    initialState ,
    extraReducers : (builder) => {
        builder.addCase(fetchProducts.pending , (state)=>{
            state.loading = true ,
            state.error = null
        }).addCase(fetchProducts.fulfilled, (state, action)=>{
            state.products = action.payload ;
            state.loading = false
        }).addCase(fetchProducts.rejected, (state, action)=>{
            
            state.error = action.payload
        }).addCase(addProduct.pending, (state)=>{
            state.loading = true
        }).addCase(addProduct.fulfilled, (state, action)=>{
            state.loading = false
        })
    }
   
})


export default productSlice.reducer;