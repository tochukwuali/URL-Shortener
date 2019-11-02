import React, {useState, useEffect} from 'react';
import classes from './ListItem.module.scss';

const ListItem = (props) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    setCopied(false)
  }, []);

  let button = <button
    onClick={(e) => {
      props.copy(e);
      setCopied(true);
    }
    }>Copy</button>
  if(copied) {
    button = <button className={classes.copied}>Copied!</button>
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
