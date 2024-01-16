import React, { useState } from 'react';

import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardPrice,
  CardIcon,
  CardDetails,
  CardRatingContent,
  CardProductRating,
  TotalReviews,
} from './CardProductStyles';
import StarRating from '../StarRating/StarRating';
import ModalProduct from '../ModalProduct/ModalProduct';

const CardProduct = ({ product, addToCart }) => {
  const [Openmodal, setOpenmodal] = useState(false);

  const handleOpenModal = () => {
    setOpenmodal(true);
  };

  const handleCloseModal = () => {
    setOpenmodal(false);
  };

  return (
    <>
      <CardContainer onClick={handleOpenModal}>
        <CardImage src={product.image} alt={product.title} />
        <CardContent>
          <CardTitle>{product.title}</CardTitle>
          <CardRatingContent>
            <CardProductRating>{product.rating.rate}</CardProductRating>
            <StarRating rating={product.rating.rate} />
            <TotalReviews>({product.rating.count})</TotalReviews>
          </CardRatingContent>
          <CardDetails>
            <CardPrice>${product.price} US</CardPrice>
            <CardIcon src={require('../../assets/add1.png')} />
          </CardDetails>
        </CardContent>
      </CardContainer>
      <ModalProduct
        open={Openmodal}
        close={handleCloseModal}
        product={product}
        addToCart={addToCart}
      />
    </>
  );
};

export default CardProduct;
