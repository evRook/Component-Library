import React from 'react';
import EmailForm from './Components/Forms/EmailForm'
import './Components/Forms/EmailForm.css'

export default {
    title: 'Forms',
    component: EmailForm,
    argTypes: {
        Size: {
            options: ['Small', 'Medium', 'Large'],
            control: { type: 'inline-radio'},
        },
    }
}

// export const Email = () => <EmailForm className="test"/>

const Template = (args) => <EmailForm {...args} />

export const Email = Template.bind({})

Email.args = {
    Size: "Small",
}