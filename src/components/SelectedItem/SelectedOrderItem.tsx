import React, { FC } from 'react';
import { Order } from '../../types/order.type';
import style from './SelectedOrderItem.module.css';
import { months } from '../../values/month';

type Props = {
  order: Order,
  selectedOrder: boolean,
  handleOpenOrder: () => void
}

export const SelectedItem: FC<Props> = ({ order, handleOpenOrder, selectedOrder }) => {
  const date = order.date.split(' ')[0].split('-');
  const day = date[2];
  const month = months.find((el) => el.id === date[1])?.value.slice(0, 3);
  const year = date[0];
  const totalUsd = order.products.reduce((acc, cur) => acc + cur.price[0].value, 0);
  const totalUah = order.products.reduce((acc, cur) => acc + cur.price[1].value, 0);
  return (
    <div className={style.order_container}>
      <p hidden={selectedOrder} onClick={handleOpenOrder} className={style.order_title}>
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
      <div hidden={selectedOrder} className={style.order_total__cost}>
        <p className={style.order_value__format}>{totalUsd}$</p>
        <p>{totalUah} &#8372;</p>
      </div>
      <img hidden={selectedOrder} className={style.order_delete__icon} src="./img/delete.svg" alt="delete icon" />
    </div>
  )
}
