import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: #333;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 10%;
  flex-direction: row;
`;

export const NavbarTitle = styled.h1`
  color: white;
  margin-left: 15px;
`;

export const NavbarTitleImage = styled.img`
  width: 30px;
  margin-right: 10px;
`;

export const NavbarLinks = styled.div`
  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #333;
  }

  display: flex;
`;

export const NavbarLink = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 20px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 15px;
    width: 100%;
    text-align: center;

    &:hover {
      background-color: #555;
    }
  }
`;

export const NavbarMenuButton = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;
