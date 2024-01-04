import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  background-color: lightseagreen;
  border: 1px solid black;
  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  background-color: white;
  border-bottom: 1px solid black;
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.h3`
  margin: 0;
`;

export const CardRatingContent = styled.div`
  display: flex;
  align-items: center;
`;

export const TotalReviews = styled.p`
  margin-left: 5px;
`;

export const CardProductRating = styled.p`
  font-weight: bold;
  margin-right: 5px;
`;

export const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardPrice = styled.p`
  margin: 8px 0;
  font-weight: bold;
  color: #333;
`;

export const CardIcon = styled.img`
  width: 25px;
  border: 2px solid black;
  padding: 6px;
  border-radius: 50px;
  background-color: white;
  object-fit: contain;
`;
