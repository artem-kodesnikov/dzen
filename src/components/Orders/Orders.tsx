import React, { useState } from 'react';
import { OrderItem } from '../SelectedItem/OrderItem';
import style from './Orders.module.css';
import { OrderProduct } from '../OrderProducts/OrderProduct';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectOrder } from '../../features/ordersSlice';

export const Orders = () => {
  const [modalShow, setModalShow] = useState(false);
  const [deleteOrderId, setDeleteOrderId] = useState(0);
  const dispatch = useAppDispatch()
  const orders = useAppSelector((state) => state.orders.orders);
  const selectedOrder = useAppSelector((state) => state.orders.selectedOrder);

  const orderProducts = orders.find((order) => order.id === selectedOrder)?.products

  const handleOpenOrder = (id: number) => {
    dispatch(selectOrder(id));
  };

  const handleCloseOrder = () => {
    dispatch(selectOrder(0));
  };

  const OpenDeleteModal = (id: number) => {
    setModalShow(true)
    setDeleteOrderId(id)
  }

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
                setModalShow={setModalShow}
                handleDelete={OpenDeleteModal}
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
          <DeleteModal
            modalShow={modalShow}
            setModalShow={setModalShow}
            deleteOrderId={deleteOrderId}
          />
        </div>
      </div>
    </div>
  )
};
