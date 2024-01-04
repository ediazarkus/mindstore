import styled from 'styled-components';

export const AppContainer = styled.div`
  position: fixed;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

export const AppBody = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
