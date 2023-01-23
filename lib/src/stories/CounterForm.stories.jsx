import React from 'react';
import CounterBtn from './Components/Forms/CounterForm'
import './Components/Forms/CounterForm.css'

export default {
    title: 'Forms',
    component: CounterBtn,
}

const Template = (args) => <CounterBtn {...args} />

export const Counter = Template.bind({})

Counter.args = {
    Min: 0,
    Max: 20,
}