import React from 'react';
import CompactTemplate from './Components/Templates/CompactTemplate'
import './Components/Templates/CompactTemplate.css'

export default {
    title: 'Templates',
    component: CompactTemplate,
}

const Template = (args) => <CompactTemplate {...args} />

export const Compact = Template.bind({})

Compact.args = {
    Title: "Apple MacBook Pro",
    Sale: "$499",
    Price: "$599",
}