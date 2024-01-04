import React, { useState } from 'react';
import {
  NavbarContainer,
  NavbarTitle,
  NavbarLinks,
  NavbarLink,
  NavbarMenuButton,
  NavbarSearch,
  NavbarTitleImage,
} from './NavbarStyles';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <NavbarContainer>
      <NavbarTitle>
        <NavbarTitleImage
          src="https://assets-global.website-files.com/5e589a8b7bb9af87ad968338/613f82a2bceafc58516997ab_ArkusNexus_iso.png"
          alt="Logo"
        />
        Mind Store
      </NavbarTitle>
      <NavbarSearch type="text" placeholder="Search..." />
      <NavbarLinks style={{ display: showMenu ? 'flex' : 'none' }}>
        <NavbarLink href="#">Home</NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarLinks>
      <NavbarMenuButton onClick={toggleMenu}>☰</NavbarMenuButton>
    </NavbarContainer>
  );
};

export default Navbar;
