import React, { FC } from 'react'
import { Order } from '../../types/order.type'
import style from './OrderItem.module.css'

type Props = {
  order: Order,
  selectedOrder: boolean,
  handleOpenOrder: () => void
}

export const OrderItem: FC<Props> = ({ order, handleOpenOrder, selectedOrder }) => {
  return (
    <div className={style.order_container}>
      <p hidden={selectedOrder} onClick={handleOpenOrder} className={style.order_title}>
        Довга предовга довжилезна назва замовлення
      </p>
      <div className={style.order_list__icon}>
        <img height={30} src="./img/list.svg" alt="list icon" />
      </div>
      <div className={style.order_products__total}>
        <p>23</p>
        <p className={style.total_products}>Products</p>
      </div>
      <div className={style.order_date}>
        <p className={style.order_value__format}>06/17</p>
        <p>06/Apr/2017</p>
      </div>
      <div className={style.order_total__cost}>
        <p className={style.order_value__format}>2 500$</p>
        <p>250 000.50</p>
      </div>
      <img className={style.order_delete__icon} src="./img/delete.svg" alt="delete icon" />
    </div>
  )
}
