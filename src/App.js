import React, {useState} from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Input from './components/Input/Input';
import Features from './components/Features/Features';
import Boost from './components/Boost/Boost';
import Footer from './components/Footer/Footer';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = () => {

  }

  const submitHandler = () => {

  }

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Input
        inputChanged={onChangeHandler}
        value={inputValue}
        clicked={submitHandler}/>
      <Features/>
      <Boost/>
      <Footer/>
    </div>
  );
}

export default App;
