import React from 'react';
import './Header.css';
import LandingButtons from '../LandingButtons/LandingButtons';

const Header = () => {
  return (
    <div className='header-style d-flex justify-content-evenly align-items-center bg-primary'>
      <div>HEADER</div>
      <LandingButtons />
    </div>
  );
};

export default Header;