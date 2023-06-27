import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { ProductItem } from './ProductItem/ProductItem';
import style from './ProductPage.module.css';

export const ProductPage = () => {
  const products = useAppSelector(state => state.products.list);
  return (
    <div className={style.orders_wrapper}>
      <div className={style.orders_container}>
        <div className={style.orders_total__container}>
          <p className={style.orders_total}>Products / {products.length}</p>
        </div>
        <div
          className={`${style.order_container} ${style.selectedItem}`}
        >
          <div className={style.order_row}>
            {products.map((product) =>
              <ProductItem
                key={product.id}
                product={product}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
