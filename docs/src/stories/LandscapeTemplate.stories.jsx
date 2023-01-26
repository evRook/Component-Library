import React from 'react';
import LandscapeTemplate from './Components/Templates/LandscapeTemplate'
import './Components/Templates/LandscapeTemplate.css'

export default {
    title: 'Templates',
    component: LandscapeTemplate,
}

const Template = (args) => <LandscapeTemplate {...args} />

export const Landscape = Template.bind({})

Landscape.args = {
    Title: "Apple MacBook Pro",
    Sale: "$499",
    Price: "$599",
}