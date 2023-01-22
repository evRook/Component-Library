import React from 'react';
import Button from './Components/Buttons/Button'
import './Components/Buttons/Button.css'
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai"

export default {
    title: 'Buttons',
    component: Button,
    argTypes: {
        Size: {
            options: ['Small', 'Medium', 'Large'],
            control: { type: 'radio'},
        },
        Type: {
            options: ["Default", "Primary", "Danger", "Success", "Warning"],
            control: { type: 'select'}
        },
    }
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
    Text: "Do Something",
    Type: "Default",
    Size: "Medium",
}