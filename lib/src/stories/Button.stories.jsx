import React from 'react';
import Button from './Button'
import './button.css'

export default {
    title: 'Button',
    component: Button,
}

export const Primary = () => <Button className="primary global"/>
export const Danger = () => <Button className="danger global"/>
export const Success = () => <Button className="success global"/>
export const Warning = () => <Button className="warning global"/>
export const Default = () => <Button className="default global"/>
// export const AddToCart = () => <Button />
// export const CartIcon = () => <Button />
// export const AddToFavorites = () => <Button />
// export const FavoritesIcon = () => <Button />
