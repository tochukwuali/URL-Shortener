import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Input from './components/Input/Input';
import URLList from './components/URLList/URLList';
import Features from './components/Features/Features';
import Boost from './components/Boost/Boost';
import Footer from './components/Footer/Footer';
import Backdrop from './components/UI/Backdrop/Backdrop';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [urls, setUrls] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    getURLs();
  }, [])

  const getURLs = () => {
    if('URLs' in localStorage) {
      setUrls(JSON.parse(localStorage.getItem('URLs')));
    }
  }

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
    setIsEmpty(false);
  }

  const submitHandler = () => {
    setIsError(false);
    setIsEmpty(false);
    if(inputValue.trim() === '') {
      setIsEmpty(true)
    } else {
      setIsLoading(true);
      axios.post('https://rel.ink/api/links/', {'url' : inputValue})
        .then(res => {
          setIsLoading(false);
          const newURLs = [...urls];
          newURLs.unshift({url: inputValue, shortURL: `https://rel.ink/${res.data.hashid}`});
          setUrls(newURLs);
          localStorage.setItem('URLs',JSON.stringify(newURLs));
          setInputValue('');
        })
        .catch(err => {
          setIsError(true);
          setIsLoading(false);
        });
    }
  }

  const copyHandler = (e) => {
    const copyText = e.target.previousSibling.value;
    const inputTemp = document.createElement("input");
    inputTemp.value = copyText;
    document.body.appendChild(inputTemp);
    inputTemp.select();
    inputTemp.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(inputTemp);
    setCopied(copyText); 
  }

  const mobileNavHandler = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div className="App">
      <Backdrop
        show={isVisible}
        clicked={mobileNavHandler}/>
      <Header
        clicked={mobileNavHandler}
        visible={isVisible}/>
      <Hero/>
      <Input
        inputChanged={onChangeHandler}
        value={inputValue}
        clicked={submitHandler}
        loading={isLoading}
        error={isError}
        empty={isEmpty}/>
      <URLList
        urls={urls}
        copy={copyHandler}
        copied={copied}/>
      <Features/>
      <Boost/>
      <Footer/>
    </div>
  );
}

export default App;
