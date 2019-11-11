import React from 'react';
import classes from './URLList.module.scss';
import ListItem from './ListItem/ListItem';

const URLList = (props) => {

  const urlList = props.urls.map(url => {
    let URL = url.url
      if(window.innerWidth < '500' && url.url.length > 30) {
        URL = url.url.substring(0, 30).concat('...');
      } else if(window.innerWidth < '700' && window.innerWidth > '500' && url.url.length > 50) {
        URL = url.url.substring(0, 50).concat('...');
      } else if(window.innerWidth < '900' && window.innerWidth > '700' && url.url.length > 70) {
        URL = url.url.substring(0, 70).concat('...');
      }

      let copied = false;
      if(props.copied === url.shortURL) {
        copied = true
      }

    return (
      <ListItem
          key={url.url}
          url={URL}
          shortUrl={url.shortURL}
          copy={props.copy}
          copied={copied}/>
    )
  });
  return (
    <div className={classes.URLList}>
        {urlList}
    </div>
  )
}

export default URLList;
