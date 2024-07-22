//1st step

import {createSlice , createAsyncThunk} from '@reduxjs/toolkit' ;
import axios from 'axios'
import {jwtDecode} from 'jwt-decode'
import { toast } from 'sonner';
//2nd step 
const initialState = {
    loading : false ,
    token : null ,
    role : null ,
    error : null ,
    name : null 
}

export const login = createAsyncThunk('/login', async(loginData ,{rejectWithValue})=>{

    try {
        const data = await axios.post('http://localhost:8000/api/login' , loginData)
        return data ;
    } catch (error) {
        console.log(error)
        rejectWithValue(error)
    }
})

// login.pending
// login.fulfilled
// login.rejected

const loginSlice = createSlice({
    name : 'login',
    initialState ,
    reducers : {
        logout : (state, action) => {
            state.loading = true ,
            state.token = null ,
            state.role = null  ,
            localStorage.removeItem("token")
            localStorage.removeItem("role")
            toast.success("Logout Successfull")

        }
    } ,
    extraReducers : (builder) => {
        builder.addCase(login.pending , (state)=>{
            state.loading = true
        }).addCase(login.fulfilled, (state, action)=>{
           const {token} = action.payload.data
           console.log(token)
           const {role , name} = jwtDecode(token)
           state.loading = false ,
           state.token = token ,
           state.role = role ,
           state.name = name,
           localStorage.setItem('name', name)
           localStorage.setItem('token' , token),
           localStorage.setItem('role', role)
           toast.success('Login Successfull')
        }).addCase(login.rejected , (state,action)=>{
           state.error = action.payload
           toast.error("Login Failed")
        })
       

    }
})



export const {logout} = loginSlice.actions ;
export default loginSlice.reducer