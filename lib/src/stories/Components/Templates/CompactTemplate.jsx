import React, { useState } from 'react';
import Beats from './img/c04297141.png'
import { AiFillStar } from "react-icons/ai";

export default function CompactTemplate({Title, Sale, Price}) {
    return (
      <div className="compact--container">
        <div className="compact--img__container">
            <div className="compact--img">
                <img src={Beats} alt="Beats Headphones" />
            </div>
            <div className="img__styleDiv"></div>
        </div>
        <div className="compact--content__container">
            <p className="compact--title">{Title}</p>
            <div className="compact--rating__container">
                <AiFillStar className="compact--rating--active"/>
                <AiFillStar className="compact--rating--active"/>
                <AiFillStar className="compact--rating--active"/>
                <AiFillStar className="compact--rating--active"/>
                <AiFillStar className="compact--rating--inactive"/>
            </div>
            <div className="compact--price__container">
                <p className="compact--sale">{Sale}</p>
                <p className="compact--msrp">{Price}</p>
            </div>
        </div>
      </div> 
    );
}   