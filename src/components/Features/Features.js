import React from 'react';
import classes from './Features.module.scss';
import Feature from './Feature/Feature';
import recognition from '../../assets/img/icon-brand-recognition.svg';
import records from '../../assets/img/icon-detailed-records.svg';
import customizable from '../../assets/img/icon-fully-customizable.svg';


const Features = () => {
  return (
    <div className={classes.features}>
      <h2>Advanced Statistics</h2>
      <p>Track how your links are performing across the web with our
      advanced statistics dashboard.</p>
    <div className={classes.details}>
        <Feature
          heading="Brand Recognition"
          paragraph="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          img={recognition}/>
        <Feature
          heading="Detailed Records"
          paragraph="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          img={records}/>
        <Feature
          heading="Fully Customizable"
          paragraph="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          img={customizable}/>
      </div>
    </div>
  )
}

export default Features;
