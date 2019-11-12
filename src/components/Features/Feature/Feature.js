import React from 'react';
import classes from './Feature.module.scss';

const Feature = (props) => {
  return (
    <div className={classes.feature}>

      <div className={classes.box}>
        <div className={classes.img}>
          <img src={props.img} alt=""/>
        </div>
        <h3>{props.heading}</h3>
        <p>{props.paragraph}</p>
      </div>
    </div>
  )
}

export default Feature;
