import React from 'react';
import classes from './XIcon.module.scss';

const XIcon = (props) => {
   
  let attachedClasses = [classes.icon];
  if(props.open) {
    attachedClasses = [classes.icon, classes.open];
  }

  return (
    <div className={classes.XIcon} onClick={props.clicked}>
      <div className={attachedClasses.join(' ')}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
};

export default XIcon;
