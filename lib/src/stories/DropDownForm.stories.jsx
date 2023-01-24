import React from 'react';
import DropdownForm from './Components/Forms/DropdownForm'
import './Components/Forms/DropdownForm.css'

export default {
    title: 'Forms',
    component: DropdownForm,
    argTypes: {
        Size: {
            options: ['Small', 'Medium', 'Large'],
            control: { type: 'inline-radio'},
        },
    }
    
}



const Template = (args) => <DropdownForm {...args} />

export const Select = Template.bind({})

Select.args = {
    Text: "Select",
    Size: "Small",
}