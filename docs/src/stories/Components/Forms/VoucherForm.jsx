import React from 'react';

export default function VoucherForm({Placeholder, Button, Size}) {
    
    let x = 1

    if(Size === "Small"){
        x = 0.2
    }else if(Size === "Medium"){
        x = 0.4
    }else if(Size === "Large"){
        x = 0.6
    } 
    
    let style = {
        padding: `${x * 20}px ${x * 45}px ${x * 20}px ${x * 45}px`,
    }

    return ( 
        <div className="voucher--container">
            <input type="text" id="voucher" Size={Size} style={style} placeholder={Placeholder}/>
            <label htmlFor="voucher" Size={Size} style={style}>{Button}</label>
        </div>
     );
}