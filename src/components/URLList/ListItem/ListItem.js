import React from 'react';
import classes from './ListItem.module.scss';

const ListItem = (props) => {
  let button = <button
    onClick={(e) => {
      props.copy(e);
    }
    }>Copy</button>

  if(props.copied) {
    button = <button
      className={classes.copied}
      onClick={(e) => {
        props.copy(e);
      }
      }>Copied!</button>
  }

  return (
    <div className={classes.container}>
      <div>{props.url}</div>
      <div>
        <input readOnly value={props.shortUrl}/>
        {button}
      </div>
    </div>
  )
}

export default ListItem;
