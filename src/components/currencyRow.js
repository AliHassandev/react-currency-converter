import React, { Component } from 'react';

const CurrencyRow = (props) => {

    const { currencyOptions,
            selectedCurrency,
            onChangeCurrency,
            amount,
            onChangeAmount
         } = props;
    return ( 

            <div>
                <input className="input" type="number" value={amount} onChange={onChangeAmount} />
                <div className="select">
                    <select name="slct" id="slct" value={selectedCurrency} onChange={onChangeCurrency}>
                        {currencyOptions.map(option => (
                            <option key={option} value={option} >{option}</option>
                            ))}
                    </select>
                </div>
            </div>
     );
}

export default CurrencyRow;