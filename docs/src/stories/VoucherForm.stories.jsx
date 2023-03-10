import React from 'react';
import VoucherForm from './Components/Forms/VoucherForm'
import './Components/Forms/VoucherForm.css'

export default {
    title: 'Forms',
    component: VoucherForm,
    argTypes: {
        Size: {
            options: ['Small', 'Medium', 'Large'],
            control: { type: 'inline-radio'},
        },
    }
}

const Template = (args) => <VoucherForm {...args} />

export const Voucher = Template.bind({})

Voucher.args = {
    Button: "Redeem",
    Placeholder: "Voucher Code",
    Size: "Medium",
}