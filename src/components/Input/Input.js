import React from 'react';
import classes from './Input.module.scss';

const Input = (props) => {
  return (
    <div className={classes.Input}>
      <div className={classes.inputContainer}>
        <input onChange={props.inputChanged} value={props.value} placeholder="Shorten a link here..."/>
        <button onClick={props.clicked}>Shorten It!</button>
      </div>
    </div>
  )
}

export default Input;
