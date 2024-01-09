import React from 'react';
import {
  AddIcon,
  AddLabel,
  AddProduct,
  CloseButton,
  ImageProduct,
  ModalBack,
  ModalCard,
  ModalContainer,
  ModalDetails,
  ProductDetails,
  ProductPrice,
  ProductRating,
  RatingContent,
  RatingInfo,
  Title,
  TotalReviews,
} from './ModalProductStyles';
import StarRating from '../StarRating/StarRating';

const ModalProduct = ({ open, close, product, addToCart }) => {
  const handleClosemodal = () => {
    close();
  };

  const handleAdd = () => {
    addToCart(product);
    close();
  };

  return (
    <ModalContainer open={open}>
      <ModalBack onClick={handleClosemodal} />
      <ModalCard>
        <ImageProduct src={product.image} />
        <CloseButton
          src={require('../../assets/close.png')}
          onClick={handleClosemodal}
        ></CloseButton>
        <ModalDetails>
          <Title>{product.title}</Title>
          <ProductDetails>{product.description}</ProductDetails>
          <ProductPrice>Price: ${product.price} US</ProductPrice>
          <RatingContent>
            <RatingInfo>
              <StarRating rating={product.rating.rate} />
              <ProductRating>{product.rating.rate}</ProductRating>
              <TotalReviews>({product.rating.count})</TotalReviews>
            </RatingInfo>
            <AddProduct onClick={handleAdd}>
              <AddLabel>Add Cart</AddLabel>
              <AddIcon src={require('../../assets/addcart1.png')} />
            </AddProduct>
          </RatingContent>
        </ModalDetails>
      </ModalCard>
    </ModalContainer>
  );
};

export default ModalProduct;
