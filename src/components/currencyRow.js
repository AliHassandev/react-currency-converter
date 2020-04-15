import React, { Component } from 'react';

const CurrencyRow = () => {
    return ( 

            <div>
                <input className="input" type="number" />
                <div class="select">
                    <select name="slct" id="slct">
                        <option selected disabled>Choose Currency</option>
                        <option value="1">USD</option>
                    </select>
                </div>
            </div>
     );
}
 
export default CurrencyRow;