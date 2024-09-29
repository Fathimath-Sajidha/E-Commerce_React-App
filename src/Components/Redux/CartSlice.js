import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'cartData',
  initialState: {
    cartItems: [],
    cartCount: null,
  },
  reducers: {
    setCartItems: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += action.payload.quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.cartCount += 1;
      }
    },
    updateCartItemQuantity: (state, action) => {
      const { id, value } = action.payload;
      const itemIndex = state.cartItems.findIndex(item => item.id === id);

      if (itemIndex !== -1) {
        const updatedQuantity = state.cartItems[itemIndex].quantity + value;
        if (updatedQuantity <= 0) {
          state.cartItems.splice(itemIndex, 1);
          state.cartCount -= 1;  // Ensure cartCount decreases correctly
        } else {
          state.cartItems[itemIndex].quantity = updatedQuantity;
        }
      }
    },
    removeCartItem: (state, action) => {
      const index = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.cartItems.splice(index, 1);
        state.cartCount -= 1; // Decrease the cart count when an item is removed
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.cartCount = 0; // Reset cartCount to 0 when the cart is cleared
    },
  }
});

export const { setCartItems, updateCartItemQuantity, removeCartItem, clearCart } = slice.actions;
export default slice.reducer;