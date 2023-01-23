import React from 'react';

export default function EmailForm(props) {
    return ( 
        <div className="email--container">
            <label for="emailInput">Email</label>
            <input type="text" placeholder="Email" id="emailInput"/>
        </div>
     );
}