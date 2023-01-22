import React from 'react';
import IconButton from './Components/Buttons/Icon-Button'
import './Components/Buttons/Icon-Button.css'
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai"

export default {
    title: 'Buttons',
    component: IconButton,
    argTypes: {
        Size: {
            options: ['Small', 'Medium', 'Large'],
            control: { type: 'radio'},
        },
    }
}

const CartTemplate = (args) => <IconButton icon={<AiOutlineShoppingCart />} {...args} />

export const Cart = CartTemplate.bind({})

Cart.args = {
    Text: "Add To Cart",
    Size: "Medium",
}

const FavoriteTemplate = (args) => <IconButton icon={<AiOutlineHeart />} {...args} />

export const Favorite = FavoriteTemplate.bind({})

Favorite.args = {
    Text: "Add To Favorites",
    Size: "Medium",
}

