import React from 'react';
import classes from './Feature.module.scss';

const Feature = (props) => {
  return (
    <div className={classes.feature}>
      <div className={classes.img}>
        <div>
          <img src={props.img} alt=""/>
        </div>
      </div>
      <div className={classes.box}>
        <h3>{props.heading}</h3>
        <p>{props.paragraph}</p>
      </div>
    </div>
  )
}

export default Feature;
