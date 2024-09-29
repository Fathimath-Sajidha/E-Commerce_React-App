
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  filteredProducts: [],
  selectedCategory: 'all', 
  selectedProduct:null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload; 
    },
    filterByCategory: (state, action) => {
      const category = action.payload;
      state.selectedCategory = category;

      if (category === 'all') {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(product => product.category === category);
      }
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },

  },
});

export const { setProducts, filterByCategory,setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;