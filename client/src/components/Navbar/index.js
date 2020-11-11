import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink
} from './NavbarElements';
import logo from '../../images/images.css';
import intellichoice from '../../images/intellihoice-logo-512x512.png';


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={intellichoice} width= "225" alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/practice' activeStyle>
            Practice
          </NavLink>
          <NavLink to='/profile' activeStyle>
            Profile
          </NavLink>
          <NavBtnLink to='/logout'>
            Quit
          </NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;