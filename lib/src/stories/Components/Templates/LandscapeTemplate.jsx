import React, { useState } from 'react';
import macBook from './img/50061505_575246.png'
import { AiFillStar } from "react-icons/ai";

export default function LandscapeTemplate({Title, Sale, Price}) {
    return (
      <div className="landscape--container">
        <div className="landscape--img">
            <img src={macBook} alt="Apple MacBook Pro" />
        </div>
        <div className="landscape--content__container">
            <p className="landscape--title">{Title}</p>
            <div className="landscape--rating__container">
                <AiFillStar className="landscape--rating--active"/>
                <AiFillStar className="landscape--rating--active"/>
                <AiFillStar className="landscape--rating--active"/>
                <AiFillStar className="landscape--rating--active"/>
                <AiFillStar className="landscape--rating--inactive"/>
            </div>
            <div className="landscape--price__container">
                <p className="landscape--sale">{Sale}</p>
                <p className="landscape--msrp">{Price}</p>
            </div>
        </div>
      </div> 
    );
}   