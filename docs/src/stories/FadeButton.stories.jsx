import React from 'react';
import Button from './Components/Buttons/Button'
import './Components/Buttons/FadeButton.css'
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
            options: ["Faded-Default", "Faded-Primary", "Faded-Danger", "Faded-Success", "Faded-Warning"],
            control: { type: 'select'}
        },
    }
}

const Template = (args) => <Button {...args} />

export const Faded = Template.bind({})

Faded.args = {
    Text: "Do Something",
    Type: "Faded-Default",
    Size: "Medium",
}