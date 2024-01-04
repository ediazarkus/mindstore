import styled from 'styled-components';

export const ProductContainer = styled.div`
  width: 70%;
  border-right: 2px solid #ccc;
  background-color: whitesmoke;
  overflow: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  padding: 20px;
  margin-bottom: 5%;
`;
