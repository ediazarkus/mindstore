import React from 'react';
import {
  MicroIcon,
  Microphone,
  NavbarSearch,
  SearchContainer,
} from './SearchStyles';

const Search = ({ onInputChange }) => {
  const handleInputChange = (event) => {
    const term = event.target.value;
    onInputChange(term);
  };

  return (
    <SearchContainer>
      <NavbarSearch
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
      />
      <Microphone onClick={() => console.log('listening')}>
        <MicroIcon src={require('../../assets/mic.png')} />
      </Microphone>
    </SearchContainer>
  );
};

export default Search;
