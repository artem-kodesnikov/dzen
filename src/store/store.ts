import { configureStore } from '@reduxjs/toolkit';
import ordersSlice from '../features/ordersSlice';
import productReducer from '../features/productSlice';

export const store = configureStore({
  reducer: {
    orders: ordersSlice,
    products: productReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;