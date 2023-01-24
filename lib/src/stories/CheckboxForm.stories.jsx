import React from 'react';
import CheckboxForm from './Components/Forms/CheckboxForm'
import './Components/Forms/CheckboxForm.css'

export default {
    title: 'Forms',
    component: CheckboxForm,
    argTypes: {
        Style: {
            options: ['Default', 'Secondary'],
            control: { type: 'inline-radio' }
        }
    }
}

const Template = (args) => <CheckboxForm {...args} />

export const Checkboxes = Template.bind({})

Checkboxes.args = {
    Style: 'Default',
    Text: "Don't show this popup again",
}
