import React from 'react'
import { addTocart,removeItemsFromCart , clearCart } from '../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
function Cart() {
    const {items} = useSelector((state)=>state.cart)
    console.log(items)

    const subtotal = items.reduce((acc,item)=>{
      return  acc + item.quantity * item.price
    },0) 


    console.log(subtotal)
const dispatch = useDispatch()
    const handleDecrease = (id) => {
        dispatch(removeItemsFromCart(id))
    }
    const handleIncrease= (id) => {
        dispatch(addTocart({id}))
    }
    const handleClearCart = () => {
        dispatch(clearCart())
    }
  return (
    <div>
    <div className='flex flex-col'>
      {items.map((item)=>(
        <div className='flex'>
            <img src={`http://localhost:8000/${item.image}`} className='h-16 w-16'/>
            <p>Name :{item.name}</p><br></br>
            <p>Price :{item.price}</p>
           
            <button onClick={()=>{handleDecrease(item.id)}}>-</button>
             <p>Quantity : {item.quantity}</p>
             <button onClick={()=>{handleIncrease(item.id)}}>+</button>
        </div>

      ))}
    

    </div>
    <p>Subtotal : ${subtotal}</p>
      <button className='bg-red-500 px-4 py-2' onClick={handleClearCart}>Clear Cart</button>
    </div>
  )
}

export default Cart
