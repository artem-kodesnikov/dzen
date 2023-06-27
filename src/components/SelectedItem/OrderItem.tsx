import React, { FC } from 'react';
import { Order } from '../../types/order.type';
import style from './OrderItem.module.css';
import { months } from '../../values/month';

type Props = {
  order: Order,
  selectedOrder: number,
  handleOpenOrder: (num: number) => void
}

export const OrderItem: FC<Props> = ({ order, handleOpenOrder, selectedOrder }) => {
  const date = order.date.split(' ')[0].split('-');
  const day = date[2];
  const month = months.find((el) => el.id === date[1])?.value.slice(0, 3);
  const year = date[0];
  const totalUsd = order.products.reduce((acc, cur) => acc + cur.price[0].value, 0);
  const totalUah = order.products.reduce((acc, cur) => acc + cur.price[1].value, 0);
  return (
    <div onClick={() => selectedOrder > 0 ? handleOpenOrder(order.id) : null} className={style.order_container}>
      <p onClick={() => handleOpenOrder(order.id)} hidden={selectedOrder > 0} className={style.order_title}>
        {order.title}
      </p>
      <div className={style.order_list__icon}>
        <img height={30} src="./img/list.svg" alt="list icon" />
      </div>
      <div className={style.order_products__total}>
        <p>{order.products.length}</p>
        <p className={style.total_products}>Products</p>
      </div>
      <div className={style.order_date}>
        <p className={style.order_value__format}>06/17</p>
        <p>{`${day}/${month}/${year}`}</p>
      </div>
      <div hidden={selectedOrder > 0} className={style.order_total__cost}>
        <p className={style.order_value__format}>{totalUsd}$</p>
        <p>{totalUah} &#8372;</p>
      </div>
      <img hidden={selectedOrder > 0} className={style.order_delete__icon} src="./img/delete.svg" alt="delete icon" />
      <div className={style.active_arrow} hidden={selectedOrder !== order.id}>
        &gt;
      </div>
    </div >
  )
}
