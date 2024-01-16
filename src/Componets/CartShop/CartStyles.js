import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  align-items: center;
  background-color: #f2f2f2;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  height: 5%;
  margin: 0px;
`;

export const CartProcutList = styled.div`
  display: flex;
  height: 65%;
  width: 90%;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  max-height: 100%;
  margin-top: 5%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CartList = styled.div`
  width: 90%;
  height: 70%;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  height: 3%;
  align-items: center;
`;

export const Note = styled.p`
  width: 90%;
  font-size: 15px;
  color: red;
  margin-left: 5px;
  margin: 0;
  height: 5%;
`;
export const TotalTitle = styled.p``;
export const TotalAmount = styled.p``;
export const Shipping = styled.p``;

export const TotalTitleFinal = styled.p`
  font-size: 18px;
  font-weight: bold;
`;
export const Total = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 90%;
  height: 10%;
  justify-content: space-evenly;
  align-items: center;
`;

export const PayButton = styled.button`
  width: 40%;
  height: 50%;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: lightgreen;
  &:hover {
    transform: scale(1.05);
  }
`;
export const CleanButton = styled.button`
  width: 40%;
  height: 50%;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: lightcoral;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Cardlogo = styled.img`
  width: 20px;
`;
