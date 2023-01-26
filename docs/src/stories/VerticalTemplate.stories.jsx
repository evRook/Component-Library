import React from 'react';
import VerticalTemplate from './Components/Templates/VerticalTemplate'
import './Components/Templates/VerticalTemplate.css'

export default {
    title: 'Templates',
    component: VerticalTemplate,
}

const Template = (args) => <VerticalTemplate {...args} />

export const Portfolio = Template.bind({})

Portfolio.args = {
    Title: "Apple MacBook Pro",
    Sale: "$499",
    Price: "$599",
}