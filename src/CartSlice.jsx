import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
     const item = action.payload
     const itemExist = state.items.find(i => i.name === item.name)
     
     if(itemExist){
      itemExist.quantity++
      return
      }
     state.items.push({...item, quantity: 1})
    },
    removeItem: (state, action) => {
      const {name} = action.payload
      state.items  = state.items.filter(item => item.name !== name)

    },
    updateQuantity: (state, action) => {
        const {name, quantity} = action.payload
        const itemExist = state.items.find(item => item.name === name)
        
          if(itemExist){
            itemExist.quantity = quantity
          }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
