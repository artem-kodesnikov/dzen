import React, { useState } from 'react';
import { OrderItem } from '../SelectedItem/OrderItem';
import style from './Orders.module.css';
import { orders } from '../../fake-data/data'
import { OrderProducts } from '../OrderProducts/OrderProducts';

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
          <div hidden={selectedOrder === 0} onClick={handleCloseOrder} className={style.order_products}>
            <div>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
              {orderProducts?.map((product) => <OrderProducts product={product} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
