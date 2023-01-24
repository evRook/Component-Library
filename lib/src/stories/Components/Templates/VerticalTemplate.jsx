import React, { useState } from 'react';
import macBook from './img/50061505_575246.png'
import { AiFillStar, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

export default function VerticalTemplate({props}) {

    let [state, setState] = useState('none');
    let toggle = {display: state,}

    function toggleOverlay() { 
        if(state === 'none'){
            setState('flex')
        }else if(state === 'flex'){
            setState('none')
        }
    }

    return (
      <div className="vertical--container">
        <div className="vertical--img">
            <img src={macBook} alt="Apple MacBook Pro" onMouseEnter={toggleOverlay} />
        </div>
        <div className="vertical--overlay" style={toggle} onMouseLeave={toggleOverlay} >
            <div className="vertical--favBtn" >
                <AiOutlineHeart />
            </div>
            <div className="vertical--cartBtn">
                <AiOutlineShoppingCart />
            </div>
        </div>
        <div className="vertical--lineBreak"></div>
        <p className="vertical--title">Apple MacBook Pro</p>
        <div className="vertical--rating__container">
            <AiFillStar className="rating--active"/>
            <AiFillStar className="rating--active"/>
            <AiFillStar className="rating--active"/>
            <AiFillStar className="rating--active"/>
            <AiFillStar className="rating--inactive"/>
        </div>
        <div className="vertical--price__container">
            <p className="vertical--sale">$499</p>
            <p className="vertical--msrp">$599</p>
        </div>
      </div> 
    );
}   