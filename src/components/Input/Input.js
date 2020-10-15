import React, {useEffect, useState} from 'react';
import classes from './Input.module.scss';
import Loader from '../UI/Loader/Loader';

const Input = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if(props.empty) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    } 
  }, [props.empty])

  useEffect(() => {
    if(props.error) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [props.error])

  return (
    <div className={classes.Input}>
      <div className={classes.inputContainer}>
        <input
          onChange={props.inputChanged}
          value={props.value}
          placeholder="Shorten a link here..."
          className={props.empty ? classes.empty : ''}/>
        <button onClick={props.clicked}>
          {props.loading ? <Loader/> : "Shorten It!"}
        </button>
        {isVisible ? <p>Please add a link.</p> : isError ? <p>Something went wrong. Please try again.</p> : null}
      </div>
    </div>
  )
}

export default Input;
