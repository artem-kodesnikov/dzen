import React, { useState } from 'react';
import { OrderItem } from '../SelectedItem/OrderItem';
import style from './Orders.module.css';
import { orders } from '../../fake-data/data'
import { OrderProduct } from '../OrderProducts/OrderProduct';

export const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState(0);
  const orderProducts = orders.find((order) => order.id === selectedOrder)?.products
  console.log(orderProducts)
  const handleOpenOrder = (id: number) => {
    setSelectedOrder(id);
  };
  const handleCloseOrder = () => {
    setSelectedOrder(0);
  };

  return (
    <div className={style.orders_wrapper}>
      <div className={style.orders_container}>
        <div className={style.orders_total__container}>
          <div className={style.orders_plus__icon}>+</div>
          <p className={style.orders_total}>Orders / {orders.length}</p>
        </div>
        <div
          className={`${style.container_container} ${(selectedOrder > 0) ? style.selectedItem : style.selectedItemw}`}
        >
          <div className={style.order_row}>
            {orders.map((order) =>
              <OrderItem
                key={order.id}
                selectedOrder={selectedOrder}
                handleOpenOrder={handleOpenOrder}
                order={order}
              />
            )}
          </div>
          <div hidden={selectedOrder === 0} className={style.order_products}>
            <div className={style.order_title}>Long too long order name Long too long order name</div>
            <div className={style.order_add__wrapper}>
              <div className={style.add_order}>
                +
              </div>
              <p className={style.add_order__title}>Add product</p>
            </div>
            <div>
              {orderProducts?.map((product) => <OrderProduct product={product} />)}
            </div>
            <div onClick={handleCloseOrder} className={style.products_close}>X</div>
          </div>
        </div>
      </div>
    </div>
  )
};
