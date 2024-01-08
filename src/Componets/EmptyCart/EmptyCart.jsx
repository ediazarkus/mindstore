import React from 'react';
import {
  EmptyCartLogo,
  EmptyCartMessageContainer,
  EmptyCartMessageText,
} from './EmptyCartStyles';

const EmptyCart = () => {
  return (
    <EmptyCartMessageContainer>
      <EmptyCartMessageText>
        The cart is empty. Add some products!
      </EmptyCartMessageText>
      <EmptyCartLogo src="https://www.omniprint.com.ar/Content/img/empty-cart.png" />
    </EmptyCartMessageContainer>
  );
};

export default EmptyCart;
