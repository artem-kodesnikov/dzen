import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { products, products2 } from '../fake-data/data';
import { Product } from '../types/product.type';
import { FilterOptions } from '../components/ProductPage/filters';

type ProductsState = {
  list: Product[];
  filter: string;
};

const initialState: ProductsState = {
  list: [...products, ...products2],
  filter: FilterOptions.All,
};


const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },

});

export const { setFilter } = productSlice.actions;

export default productSlice.reducer;
