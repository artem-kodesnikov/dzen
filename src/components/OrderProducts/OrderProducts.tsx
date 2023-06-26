import React, { FC } from 'react'
import { Product } from '../../types/product.type'

type Props = {
  product: Product
}

export const OrderProducts: FC<Props> = ({ product }) => {
  return (
    <div>{product.title}</div>
  )
}
