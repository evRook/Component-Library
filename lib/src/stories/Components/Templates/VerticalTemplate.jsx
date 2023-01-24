import React from 'react';
import macBook from './img/50061505_575246.png'
import IconButton from "/Users/ericspychalski/GA-Assignments/sandbox/Component-Library/lib/src/stories/Components/Buttons/Icon-Button.jsx";
import { AiFillStar, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

export default function VerticalTemplate({props}) {

    // function changeColor() {
    //     console.log("test")
    // }

    // let style = {}

    return (
      <div className="vertical--container">
        <div className="vertical--img">
            <img src={macBook} alt="" />
        </div>
        <div className="vertical--overlay">
            <IconButton icon={<AiOutlineHeart />} Size="Small" onClick={changeColor}/>
            <IconButton icon={<AiOutlineShoppingCart />} Size="Small" />
        </div>
        <div className="vertical--lineBreak"></div>
        <p className="vertical--title">Apple MacBook Pro</p>
        <div className="vertical--rating__container">
            <AiFillStar className="test"/>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
        </div>
        <div className="vertical--price__container">
            <p className="vertical--sale">$499</p>
            <p className="vertical--msrp">$599</p>
        </div>
      </div> 
    );
}   