import React from 'react';

export default function VoucherForm(props) {
    return ( 
        <div className="voucher--container">
            <input type="text" id="voucher" placeholder="Voucher Code"/>
            <label for="voucher">Redeem</label>
        </div>
     );
}