import React from 'react';
import classes from './Hero.module.scss';
import Image from '../../assets/img/illustration-working.svg';

const Hero = () => {
  return (
    <div className={classes.Hero}>
      <div>
        <h1>More than just shorter links</h1>
        <p>Build your brand’s recognition and get detailed insights
        on how your links are performing.</p>
        <button>Get Started</button>
      </div>
      <div>
        <img src={Image} alt=""/>
      </div>
    </div>
  )
}

export default Hero;
