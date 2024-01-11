import React from 'react';
import {
  NavbarContainer,
  NavbarTitle,
  NavbarSearch,
  NavbarTitleImage,
} from './NavbarStyles';
import Search from '../Search/Search';

const Navbar = ({ onInputChange }) => {
  return (
    <NavbarContainer>
      <NavbarTitle>
        <NavbarTitleImage
          src="https://assets-global.website-files.com/5e589a8b7bb9af87ad968338/613f82a2bceafc58516997ab_ArkusNexus_iso.png"
          alt="Logo"
        />
        Mind Store
      </NavbarTitle>
      <Search onInputChange={onInputChange} />
    </NavbarContainer>
  );
};

export default Navbar;
