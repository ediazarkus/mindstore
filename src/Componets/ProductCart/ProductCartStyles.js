import styled from 'styled-components';
export const CartListContainer = styled.div`
  display: flex;
  height: 10%;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-bottom: 5px;
  border: 1px solid black;
`;

export const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 85%;
  height: 100%;
`;

export const ImageItem = styled.img`
  width: 20%;
  height: 100%;
  object-fit: contain;
  background-color: white;
`;

export const CartProductContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;
  align-items: center;
`;
export const Title = styled.p`
  margin: 0;
`;
export const Price = styled.p`
  margin: 0;
`;
export const Quantity = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 15px;
`;

export const QuatityContent = styled.div`
  display: flex;
  width: 20%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const RemoveButton = styled.button`
  color: #000;
  border: none;
  cursor: pointer;
  size: 20px;
  border: 1px solid black;
`;

export const AddButton = styled.button`
  color: #000;
  border: none;
  cursor: pointer;
  size: 20px;
  border: 1px solid black;
`;
