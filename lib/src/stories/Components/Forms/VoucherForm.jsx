import React from 'react';

export default function VoucherForm({Placeholder, Button}) {
    return ( 
        <div className="voucher--container">
            <input type="text" id="voucher" placeholder={Placeholder}/>
            <label for="voucher">{Button}</label>
        </div>
     );
}