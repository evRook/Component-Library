import React, { useState } from 'react';
import macBook from './img/50061505_575246.png'
import IconButton from '/Users/ericspychalski/GA-Assignments/sandbox/Component-Library/lib/src/stories/Components/Buttons/Icon-Button'
import { AiFillStar, AiOutlineShoppingCart, AiOutlineHeart  } from "react-icons/ai";

export default function LargeTemplate({Title, Sale, Price, Tag, Reviews, Content}) {
    return (
      <div className="large--container">
        <div className="large--img__container">
            <div className="img__tag">{Tag}</div>
            <div className="large--img">
                <img src={macBook} alt="Apple MacBook Pro" />
            </div>
        </div>
        <div className="large--content__container">
            <p className="large--title">{Title}</p>
            <div className="large--rating__container">
                <div className="large--rating--stars">
                    <AiFillStar className="large--rating--active"/>
                    <AiFillStar className="large--rating--active"/>
                    <AiFillStar className="large--rating--active"/>
                    <AiFillStar className="large--rating--active"/>
                    <AiFillStar className="large--rating--inactive"/>
                </div>
                <p className="large--rating--reviews">0 reviews</p>
                <a className="large__reviews--link" href="#">Submit a review</a>
            </div>
            <div className="large--price__container">
                <p className="large--sale">{Sale}</p>
                <p className="large--msrp">{Price}</p>
            </div>
            <div className="large--content--text">
                <p>{Content}</p>
            </div>
            <div className="large--button--container">
                <IconButton Size={"Medium"} icon={<AiOutlineShoppingCart />} Text="Add To Cart" />
                <IconButton Size={"Small"} icon={<AiOutlineHeart />} Text={''}/>
            </div>
        </div>
      </div> 
    );
} 