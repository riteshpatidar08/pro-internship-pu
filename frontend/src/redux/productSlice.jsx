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
        })
    }
   
})


export default productSlice.reducer;