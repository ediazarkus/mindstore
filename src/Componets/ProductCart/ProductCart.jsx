import React from 'react';
import {
  AddButton,
  CartItem,
  CartListContainer,
  CartProductContent,
  ImageItem,
  Price,
  Quantity,
  QuatityContent,
  RemoveButton,
  Title,
} from './ProductCartStyles';

const truncateTitle = (title, wordsCount) => {
  const words = title.split(' ');
  const truncatedWords = words.slice(0, wordsCount);
  return truncatedWords.join(' ');
};

const ProductCart = ({ cartItems, onRemoveItem, handleAddItem }) => {
  return (
    <>
      {cartItems.map((item) => (
        <CartListContainer>
          <CartItem key={item.id}>
            <ImageItem src={item.image} />
            <CartProductContent>
              <Title>{truncateTitle(item.title, 2)}</Title>
              <Price>${item.price * item.cantidad} US</Price>
            </CartProductContent>
          </CartItem>
          <QuatityContent>
            <RemoveButton onClick={() => onRemoveItem(item.id)}>-</RemoveButton>
            <Quantity>{item.cantidad}</Quantity>
            <AddButton onClick={() => handleAddItem(item.id)}>+</AddButton>
          </QuatityContent>
        </CartListContainer>
      ))}
    </>
  );
};

export default ProductCart;
