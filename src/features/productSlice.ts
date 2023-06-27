import { createSlice } from '@reduxjs/toolkit';
import { products, products2 } from '../fake-data/data';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: [...products, ...products2],
  },
  reducers: {},
});

export default productSlice.reducer;
