import React from 'react';
import {
  CartContainer,
  CartList,
  Title,
  TotalContainer,
  TotalTitle,
} from './CartStyles';

const Cart = () => {
  return (
    <CartContainer>
      <Title>My cart </Title>
      <CartList />
      <TotalTitle></TotalTitle>
    </CartContainer>
  );
};

export default Cart;
