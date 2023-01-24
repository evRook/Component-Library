import React from 'react';
import macBook from './img/50061505_575246.png'

export default function VerticalTemplate({props}) {
    return (
      <div className="vertical--container">
        <div className="vertical--img">
            <img src={macBook} alt="" />
        </div>
        <div className="vertical--lineBreak"></div>
        <p className="vertical--title">Apple MacBook Pro</p>
        <div className="vertical--rating__container">
            
        </div>
        <div className="vertical--price__container">
            <p className="vertical--sale">$499</p>
            <p className="vertical--msrp">$599</p>
        </div>
      </div> 
    );
}   