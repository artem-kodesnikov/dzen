import React, { FC } from 'react';
import { Product } from '../../types/product.type';
import { OrderProduct } from '../OrderProducts/OrderProduct';
import style from './OrderProductList.module.css';

type Props = {
  selectedOrder: number,
  orderProducts?: Product[],
  addProduct: () => void,
  handleCloseOrder: () => void
}

export const OrderProductList: FC<Props> = ({ selectedOrder, orderProducts, addProduct, handleCloseOrder }) => {
  return (
    <div hidden={selectedOrder === 0} className={style.order_products}>
      <div className={style.order_title}>Long too long order name Long too long order name</div>
      <div onClick={addProduct} className={style.order_add__wrapper}>
        <div className={style.add_order}>
          +
        </div>
        <p className={style.add_order__title}>Add product</p>
      </div>
      <div>
        {orderProducts?.map((product) => <OrderProduct key={product.id} product={product} />)}
      </div>
      <div onClick={handleCloseOrder} className={style.products_close}>X</div>
    </div>
  );
};
