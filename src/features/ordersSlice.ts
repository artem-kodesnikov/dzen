import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '../types/order.type';
import { orders } from '../fake-data/data';

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
  },
});

export const { selectOrder, deleteOrder } = orderSlice.actions;

export default orderSlice.reducer;
