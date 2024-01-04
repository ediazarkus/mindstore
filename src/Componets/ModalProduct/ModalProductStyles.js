import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  height: 120%;
  width: 100%;
  top: -20px;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

export const ModalBack = styled.div`
  position: absolute;
  height: 100%;
  width: 110%;
  background-color: black;
  opacity: 0.5;
`;

export const ModalCard = styled.div`
  position: absolute;
  height: 50%;
  width: 50%;
  display: flex;
  border-radius: 20px;
  background-color: turquoise;
  margin-top: -40px;
  border: 2px solid black;
  justify-content: space-between;
`;

export const ImageProduct = styled.img`
  width: 50%;
  height: 100%;
  object-fit: contain;
  background-color: white;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-right: 2px solid black;
`;

export const ModalDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  height: 100%;
  background-color: white;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Title = styled.h3`
  margin-left: 10px;
`;

export const CloseButton = styled.img`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3%;
  height: 5%;
  color: white;
  border-radius: 50px;
  border: 1px solid black;
  padding: 2px;
`;

export const ProductDetails = styled.p`
  margin-left: 10px;
`;

export const ProductPrice = styled.p`
  margin-left: 10px;
`;

export const RatingContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  justify-content: space-evenly;
  height: 10%;
  padding-bottom: 10px;
`;

export const ProductRating = styled.p`
  font-weight: bold;
  margin-left: 5px;
  margin-right: 5px;
`;

export const TotalReviews = styled.p``;

export const AddProduct = styled.button`
  width: 15%;
  background-color: lightseagreen;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-end;
  border-radius: 50%;
`;

export const AddIcon = styled.img`
  width: 100%;
  object-fit: contain;
  border-top-left-radius: 20px;
`;
