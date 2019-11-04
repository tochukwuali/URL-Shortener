import React from 'react';
import {FaFacebookSquare, FaTwitter, FaInstagram} from 'react-icons/fa';
import {IoLogoPinterest} from 'react-icons/io'
import classes from './Footer.module.scss';
import Logo from '../UI/Logo/Logo';


const Footer = () => {

  return (
    <footer>
      <div className={classes.flexbox}>
        <div>
          <Logo/>
        </div>
        <div>
          <h4>Features</h4>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <a href="#"><FaFacebookSquare/></a>
          <a href="#"><FaTwitter/></a>
          <a href="#"><IoLogoPinterest/></a>
          <a href="#"><FaInstagram/></a>
        </div>
      </div>
      <div className={classes.attribution}>
        Coded by <a href="https://josyhartig.com" target="_blank" rel="noopener noreferrer">Josy</a>.
         Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
      </div>
    </footer>
  )
};

export default Footer;
