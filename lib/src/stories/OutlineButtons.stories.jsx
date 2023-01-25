import React from 'react';
import Button from './Components/Buttons/Button'
import './Components/Buttons/OutlineButtons.css'
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai"

export default {
    title: 'Buttons',
    component: Button,
    argTypes: {
        Size: {
            options: ['Small', 'Medium', 'Large'],
            control: { type: 'inline-radio'},
        },
        Type: {
            options: ["Outlined-Default", "Outlined-Primary", "Outlined-Danger", "Outlined-Success", "Outlined-Warning"],
            control: { type: 'select'}
        },
    }
}

const Template = (args) => <Button {...args} />

export const Outline = Template.bind({})

Outline.args = {
    Text: "Do Something",
    Type: "Outlined-Default",
    Size: "Medium",
}