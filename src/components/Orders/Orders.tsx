import React, { useState } from 'react';
import { OrderItem } from '../SelectedItem/OrderItem';
import style from './Orders.module.css';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addProductToOrder, selectOrder } from '../../features/ordersSlice';
import { Product } from '../../types/product.type';
import { OrderProductList } from '../OrderProductsList/OrderProductList';

export const Orders = () => {
  const [modalShow, setModalShow] = useState(false);
  const [deleteOrderId, setDeleteOrderId] = useState(0);
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.orders.orders);
  const selectedOrder = useAppSelector((state) => state.orders.selectedOrder);

  const orderProducts = orders.find((order) => order.id === selectedOrder)?.products;

  const handleOpenOrder = (id: number) => {
    dispatch(selectOrder(id));
  };

  const handleCloseOrder = () => {
    dispatch(selectOrder(0));
  };

  const OpenDeleteModal = (id: number) => {
    setModalShow(true);
    setDeleteOrderId(id);
  };

  const product: Product = {
    id: Math.floor(Math.random() * 100),
    serialNumber: '90LM0500-B01370',
    isNew: 1,
    photo: 'https://content.rozetka.com.ua/goods/images/big_tile/18307112.jpg',
    title: 'Asus TUF Gaming VG27AQ',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 }
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  };

  const handleAddProductToOrder = () => {
    dispatch(addProductToOrder(product));
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
                setModalShow={setModalShow}
                handleDelete={OpenDeleteModal}
                order={order}
              />
            )}
          </div>
          <OrderProductList
            orderProducts={orderProducts}
            selectedOrder={selectedOrder}
            addProduct={handleAddProductToOrder}
            handleCloseOrder={handleCloseOrder}
          />
          <DeleteModal
            modalShow={modalShow}
            setModalShow={setModalShow}
            deleteOrderId={deleteOrderId}
          />
        </div>
      </div>
    </div>
  );
};
