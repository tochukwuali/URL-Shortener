import React, {useState} from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Input from './components/Input/Input';
import Features from './components/Features/Features';
import Boost from './components/Boost/Boost';
import Footer from './components/Footer/Footer';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [URL, setURL] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandler = (e) => {
    setInputValue(e.target.value)
  }

  const submitHandler = () => {
    setIsError(false);
    setIsLoading(true);
    axios.post('https://rel.ink/api/links/', {'url' : inputValue})
      .then(res => {
        setURL(`https://rel.ink/${res.data.hasid}`);
        setIsLoading(false);
      })
      .catch(err => {
        setIsError(true);
        setIsLoading(false);
      });
  }

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Input
        inputChanged={onChangeHandler}
        value={inputValue}
        clicked={submitHandler}
        loading={isLoading}/>
      <Features/>
      <Boost/>
      <Footer/>
    </div>
  );
}

export default App;
