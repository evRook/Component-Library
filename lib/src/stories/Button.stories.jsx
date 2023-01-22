import React from 'react';
import Button from './Button'
import './button.css'
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai"

export default {
    title: 'Buttons',
    component: Button,
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    className: "primary global",
    text: "Do Somthing",
    type: "Medium",
}

export const Danger = Template.bind({})
Danger.args = {
    className: "danger global",
    text: "Do Somthing",
    type: "Medium",
}



// export const Primary = () => <Button className="primary global" text="Do Something"/>
// export const Danger = () => <Button className="danger global" text="Do Something"/>
// export const Success = () => <Button className="success global" text="Do Something"/>
// export const Warning = () => <Button className="warning global" text="Do Something"/>
// export const Default = () => <Button className="default global" text="Do Something"/>
// export const AddToCart = () => <Button className="addToCart iconsGlobal" icon={<AiOutlineShoppingCart /> } text="Add To Cart" />
// export const CartIcon = () => <Button className="cartIcon iconsGlobal" icon={<AiOutlineShoppingCart />}/> 
// export const AddToFavorites = () => <Button className="addToFavorties iconsGlobal" icon={<AiOutlineHeart />} text="Add To Favorites"/>
// export const FavoritesIcon = () => <Button className="favoritesIcon iconsGlobal" icon={<AiOutlineHeart />} />
