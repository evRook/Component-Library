import React from 'react';
import Button from './Components/Buttons/Primary'
import './Components/Buttons/Primary.css'

export default {
    title: 'Buttons',
    component: Button,
    argTypes: {
        Size: {
            options: ['Small', 'Medium', 'Large'],
            control: { type: 'radio'},
        },
        Type: {
            options: ['Default', 'Primary', 'Danger', 'Success', 'Warning'],
            control: { type: 'radio'},
        }
    }
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
    Text: "Do Something",
    Type: "Default",
    Size: "Medium",
}