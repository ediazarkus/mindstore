import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-left: 10%;
  height: 40%;
`;

export const NavbarSearch = styled.input`
  width: 90%;
  height: 91%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding-left: 10px;
  outline: none;
`;

export const Microphone = styled.button`
  height: 100%;
  width: 5%;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${(props) =>
    props.listening ? 'lightgreen' : 'lightgray'};
`;

export const MicroIcon = styled.img`
  width: 80%;
`;
