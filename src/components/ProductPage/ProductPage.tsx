import React, { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ProductItem } from './ProductItem/ProductItem';
import style from './ProductPage.module.css';
import { Form } from 'react-bootstrap';
import { setFilter } from '../../features/productSlice';
import { FilterOptions } from './filters';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const ProductPage = () => {
  const products = useAppSelector(state => state.products.list);
  const filter = useAppSelector(state => state.products.filter);
  const dispatch = useAppDispatch();

  const filteredProducts = filter === FilterOptions.All
    ? products
    : products.filter(product => product.type === filter);
    
    const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
      dispatch(setFilter(event.target.value));
  };

  return (
    <div className={style.products_wrapper}>
      <div className={style.products_container}>
        <div className={style.products_total__container}>
          <p className={style.products_total}>Products / {filteredProducts.length}</p>
          <Form.Select 
            className={style.products_filter}
            value={filter} 
            onChange={handleCategoryChange}
            size="sm"
          >
            {Object.values(FilterOptions).map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </Form.Select>
        </div>
        <div
          className={`${style.product_container} `}
        >
          <TransitionGroup className={style.product_row}>
            {filteredProducts.map((product) => (
              <CSSTransition key={product.id} classNames={{
                enter: style.fadeEnter,
                enterActive: style.fadeEnterActive,
                exit: style.fadeExit,
                exitActive: style.fadeExitActive,
                appear: style.fadeAppear,
                appearActive: style.fadeAppearActive,
              }} timeout={300}
              >
                <ProductItem product={product} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
};
