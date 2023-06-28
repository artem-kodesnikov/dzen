import React, { FC } from 'react';
import { formatDate, formatDayDate } from '../../../helpers/formatData';
import { Product } from '../../../types/product.type';
import style from './ProductItem.module.css';

type Props = {
  product: Product
}

export const ProductItem: FC<Props> = ({ product }) => {
  const guaranteeStart = formatDate(product.guarantee.start);
  const guaranteeEmd = formatDate(product.guarantee.end);
  const orderDate = formatDayDate(product.date);
  return (
    <>
      <div className={style.product_wrapper}>
        <div className={style.product_image} >
          <img className={style.image} src={product.photo} alt="product photo" />
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
        <div className={style.guarantee}>
          <div>From: {guaranteeStart}</div>
          <div>To: {guaranteeEmd}</div>
        </div>
        <div className={style.status}>
          {product.isNew ? 'New' : 'Used'}
        </div>
        <div className={style.price}>
          <div>{product.price[0].value} $</div>
          <div>{product.price[1].value} &#8372;</div>
        </div>
        <div className={style.group}>
          Long too long order name Long too long order name
        </div>
        <div className={style.customer}>
          Customer Name
        </div>
        <div className={style.group}>
          Long too long order name Long too long order name
        </div>
        <div className={style.date}>
          <div className={style.format_data}>06/12</div>
          <div>{orderDate}</div>
        </div>
      </div>
      <div className={style.divider}></div>
    </>
  );
};
