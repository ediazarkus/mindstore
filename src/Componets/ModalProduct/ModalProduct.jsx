import React from 'react';
import {
  AddIcon,
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
  Title,
  TotalReviews,
} from './ModalProductStyles';
import StarRating from '../StarRating/StarRating';

const ModalProduct = ({ open, close, product }) => {
  const handleClosemodal = () => {
    close();
  };
  console.log(product);

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
          <ProductPrice>${product.price} US</ProductPrice>
          <RatingContent>
            <StarRating rating={product.rating.rate} />
            <ProductRating>{product.rating.rate}</ProductRating>
            <TotalReviews>({product.rating.count})</TotalReviews>
            <AddProduct>
              <AddIcon src={require('../../assets/addcart1.png')} />
            </AddProduct>
          </RatingContent>
        </ModalDetails>
      </ModalCard>
    </ModalContainer>
  );
};

export default ModalProduct;
