import React from 'react';

export default function EmailForm({Size = "Small", Placeholder, Label}) {

    let x = 1
    if(Size === "Small"){
        x = 0.5
    }else if(Size === "Large"){
        x = 1.5
    } 

    let style = {
        padding: `${x * 12}px ${x * 25}px ${x * 12}px 15px`,
    }

    if(Placeholder === '') {
        Placeholder = Label 
    }

    return ( 
        <div className="email--container">
            <label htmlFor="emailInput">{Label}</label>
            <input type="text" placeholder={Placeholder} id="emailInput" Size={Size} style={style}/>
        </div>
    );
}