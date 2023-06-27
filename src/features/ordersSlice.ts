import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '../types/order.type';
import { orders } from '../fake-data/data';
import { Product } from '../types/product.type';

type OrderState = {
  orders: Order[];
  selectedOrder: number;
};

const initialState: OrderState = {
  orders,
  selectedOrder: 0,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    selectOrder: (state, action: PayloadAction<number>) => {
      state.selectedOrder = action.payload;
    },
    deleteOrder: (state, action: PayloadAction<number>) => {
      const orderId = action.payload;
      state.orders = state.orders.filter(order => order.id !== orderId);
      if (state.selectedOrder === orderId) {
        state.selectedOrder = 0;
      }
    },
    addProductToOrder: (state, action: PayloadAction<Product>) => {
      const selectedOrder = state.orders.find((order) => order.id === state.selectedOrder);
      if (selectedOrder) {
        selectedOrder.products.push(action.payload);
      }
    },
    removeProductFromOrder: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const selectedOrder = state.orders.find((order) => order.id === state.selectedOrder);
      if (selectedOrder) {
        selectedOrder.products = selectedOrder.products.filter(product => product.id !== productId);
      }
    }
  },
});

export const { selectOrder, deleteOrder, addProductToOrder, removeProductFromOrder } = orderSlice.actions;

export default orderSlice.reducer;
