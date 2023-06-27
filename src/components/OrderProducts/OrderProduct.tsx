import React, { FC } from 'react';
import { Product } from '../../types/product.type';
import style from './OrderProduct.module.css';

type Props = {
  product: Product
}

export const OrderProduct: FC<Props> = ({ product }) => {
  return (
    <>
      <div className={style.product_wrapper}>
        <div className={style.product_dot}></div>
        <div className={style.product_image} >
          <img className={style.image} src={product.photo} alt="" />
        </div>
        <div className={style.order_name}>
          <div className={style.title}>
            {product.title}
          </div>
          <div className={style.serial_number}>
            {product.serialNumber}
          </div>
        </div>
        <div className={style.available}>
          Available
        </div>
        <img className={style.delete_icon} src="./img/delete.svg" alt="delete icon" />
      </div>
      <div className={style.divider}></div>
    </>
  )
}
