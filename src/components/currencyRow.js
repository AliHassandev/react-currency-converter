import React, { Component } from 'react';

const CurrencyRow = (props) => {

    const { currencyOptions,
            selectedCurrency
         } = props;
    return ( 

            <div>
                <input className="input" type="number" />
                <div className="select">
                    <select name="slct" id="slct" value={selectedCurrency}>
                        {currencyOptions.map(option => (
                            <option key={option} value={option} >{option}</option>
                            ))}
                    </select>
                </div>
            </div>
     );
}

export default CurrencyRow;