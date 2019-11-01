import React from 'react';
import classes from './Header.module.scss';
import Logo from '../../assets/img/logo.svg';

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <a href="#"><img src={Logo} alt="Logo"/></a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
        <div>
          <a href="#">Login</a>
          <button>Sign Up</button>
        </div>
      </nav>
    </header>
  )
}

export default Header;
