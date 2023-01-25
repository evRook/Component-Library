import React from 'react';
import LargeTemplate from './Components/Templates/LargeTemplate'
import './Components/Templates/LargeTemplate.css'

export default {
    title: 'Templates',
    component: LargeTemplate,
}

const Template = (args) => <LargeTemplate {...args} />

export const Large = Template.bind({})

Large.args = {
    Title: "Apple MacBook Pro",
    Sale: "$499",
    Price: "$599",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..."
}