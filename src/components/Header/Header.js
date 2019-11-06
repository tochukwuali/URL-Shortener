import React from 'react';
import classes from './Header.module.scss';
import Logo from '../../assets/img/logo.svg';
import MobileNav from './MobileNav/MobileNav';

const Header = (props) => {

  return (
    <header>
      <nav>
        <div>
          <span>
            <a href="#"><img src={Logo} alt="Logo"/></a>
          </span>
          <span>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
          </span>
        </div>
        <div>
          <a href="#">Login</a>
          <button>Sign Up</button>
        </div>
      </nav>
      <MobileNav
        clicked={props.clicked}
        visible={props.visible}/>
    </header>
  )
}

export default Header;
