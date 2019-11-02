import React from 'react';
import classes from './URLList.module.scss';
import ListItem from './ListItem/ListItem';

const URLList = (props) => {
  const urlList = props.urls.map(url => <ListItem
    key={url.url}
    url={url.url}
    shortUrl={url.shortURL}
    copy={props.copy}/>)
  return (
    <div className={classes.URLList}>
        {urlList}
    </div>
  )
}

export default URLList;
