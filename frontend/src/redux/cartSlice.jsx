import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addTocart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          old_price : newItem.old_price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }

      state.totalQuantity++ ;
      state.totalPrice += newItem.price

    },

    removeItemsFromCart(state,action){
        const idToDelete = action.payload ;
        const existingItem = state.items.find(item=>item.id === idToDelete)

        if(existingItem){
            if(existingItem.quantity === 1){
                state.items = state.items.filter((item)=> item.id !== idToDelete)
            } else {
                existingItem.quantity--
            }
            state.totalQuantity-- ;
            state.totalPrice -= existingItem.price
        } 

    },

     clearCart(state){
        state.items = [] ,
        state.totalPrice = 0 ,
        state.totalQuantity = 0 
  
    }
     
  },
})

export const {addTocart , removeItemsFromCart , clearCart} = cartSlice.actions
export default cartSlice.reducer