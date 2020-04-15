import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './components/currencyRow';
import { apiUrl } from './/config.json';


// const currencyApi = apiUrl;
console.log(apiUrl);


function App() {

  const [ currencyOptions, setCurrencyOptions ] = useState([]);
  const [ fromCurrency, setFromCurrency ]       = useState();
  const [ toCurrency, setToCurrency ]           = useState();
  
  
  useEffect(() => {
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      const firstCurrency = Object.keys(data.rates)[0];
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      setFromCurrency(data.base)
      setToCurrency(firstCurrency)

    })
  }, []);


  return (
    <div className="App">
      <h1>Convert</h1>
      <CurrencyRow
        currencyOptions={currencyOptions} 
        selectedCurrency={fromCurrency}
        />
      <div className="equals">=</div>
      <CurrencyRow 
        currencyOptions={currencyOptions} 
        selectedCurrency={toCurrency}
        />
    </div>
  );
}

export default App;
