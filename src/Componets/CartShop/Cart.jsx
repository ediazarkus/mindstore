import React from 'react';
import {
  CartContainer,
  CartProcutList,
  Note,
  Shipping,
  Title,
  Total,
  TotalAmount,
  TotalContainer,
  TotalTitle,
  TotalTitleFinal,
} from './CartStyles';
import EmptyCart from '../EmptyCart/EmptyCart';
import ProductCart from '../ProductCart/ProductCart';

const calculateTotalPrice = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.cantidad,
    0
  );
};

const Cart = ({ cartItems, onRemoveItem, handleAddItem }) => {
  const totalPrice = calculateTotalPrice(cartItems);
  const shippingCost = totalPrice > 100 ? 0 : 50;
  return (
    <CartContainer>
      <Title>My cart </Title>

      {cartItems.length > 0 ? (
        <>
          <CartProcutList>
            <ProductCart
              cartItems={cartItems}
              onRemoveItem={onRemoveItem}
              handleAddItem={handleAddItem}
            />
          </CartProcutList>
          {totalPrice < 100 ? (
            <Note>
              ❗add ${(100 - totalPrice).toFixed(2)} US more for free shipping
            </Note>
          ) : null}

          <TotalContainer>
            <TotalTitle>Subtotal: </TotalTitle>
            <TotalAmount>${totalPrice} US</TotalAmount>
          </TotalContainer>
          <TotalContainer>
            <TotalTitle>Shipping: </TotalTitle>
            <Shipping>${shippingCost} US</Shipping>
          </TotalContainer>
          <TotalContainer>
            <TotalTitleFinal>Total: </TotalTitleFinal>
            <Total>${totalPrice + shippingCost} US</Total>
          </TotalContainer>
        </>
      ) : (
        <CartProcutList>
          <EmptyCart />
        </CartProcutList>
      )}
    </CartContainer>
  );
};

export default Cart;
