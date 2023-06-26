import React, { useState } from 'react';
import { SelectedItem } from '../SelectedItem/SelectedOrderItem';
import style from './Orders.module.css';
import { orders } from '../../fake-data/data'

export const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState(false);

  const handleOpenOrder = () => {
    setSelectedOrder(!selectedOrder);
  };
  // const handleCloseOrder = () => {
  //   setSelectedOrder(false);
  // };

  return (
    <div className={style.orders_wrapper}>
      <div className={style.orders_container}>
        <div className={style.orders_total__container}>
          <div className={style.orders_plus__icon}>+</div>
          <p className={style.orders_total}>Orders / {orders.length}</p>
        </div>
        <div
          className={`${style.container_container} ${selectedOrder ? style.selectedItem : style.selectedItemw}`}
        >
          <div className={style.order_row}>
            {orders.map((order) =>
              <SelectedItem
                key={order.id}
                selectedOrder={selectedOrder}
                handleOpenOrder={handleOpenOrder}
                order={order}
              />
            )}
          </div>
          <div className={style.order_products}>
            <div>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
