import React from 'react';
import {
  ButtonsContainer,
  Cardlogo,
  CartContainer,
  CartProcutList,
  CleanButton,
  Note,
  PayButton,
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
import Swal from 'sweetalert2';

const calculateTotalPrice = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.cantidad,
    0
  );
};

const Cart = ({ cartItems, onRemoveItem, handleAddItem, handleClearCart }) => {
  const handlePay = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your products have send',
      showConfirmButton: false,
      timer: 2000,
    });

    handleClearCart();
  };

  const handleClean = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your cart has been cleaned .',
          icon: 'success',
        });

        handleClearCart();
      }
    });
  };

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
            <TotalAmount>${totalPrice.toFixed(2)} US</TotalAmount>
          </TotalContainer>
          <TotalContainer>
            <TotalTitle>Shipping: </TotalTitle>
            <Shipping>${shippingCost} US</Shipping>
          </TotalContainer>
          <TotalContainer>
            <TotalTitleFinal>Total: </TotalTitleFinal>
            <Total>${(totalPrice + shippingCost).toFixed(2)} US</Total>
          </TotalContainer>
          <ButtonsContainer>
            <CleanButton onClick={handleClean}>
              Clean Cart
              <Cardlogo src={require('../../assets/emptyCart.png')} />
            </CleanButton>
            <PayButton onClick={handlePay}>
              Pay Cart
              <Cardlogo src={require('../../assets/card.png')} />
            </PayButton>
          </ButtonsContainer>
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
