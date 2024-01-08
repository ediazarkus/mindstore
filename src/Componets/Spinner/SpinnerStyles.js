import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 80%;
  background-color: whitesmoke;
  border-right: 2px solid #ccc;
`;

export const SpinnerElement = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top: 8px solid #000;
  width: 100px;
  height: 100px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
