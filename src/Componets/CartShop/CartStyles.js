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
`;

export const CartProcutList = styled.div`
  display: flex;
  height: 65%;
  width: 90%;
  align-items: center;
  /* background-color: #f2f2f2; */
  flex-direction: column;
  overflow-y: auto;
  max-height: 100%;

  &::-webkit-scrollbar {
    display: none; /* Chrome y Safari */
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
