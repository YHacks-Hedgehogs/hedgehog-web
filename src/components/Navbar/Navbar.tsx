import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <a href='/'><img className='navbar-brand' src='/img/logo.png' alt='Hedgehog Brand Logo'/></a>
      <nav className='navbar-nav'>
        <a href='/apply' className='btn btn-sm'>Get Started</a>
      </nav>
    </div>
  );
}

export default Navbar;
