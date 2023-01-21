import React from 'react';
import Button from './Button'
import './button.css'

export default {
    title: 'Button',
    component: Button,
}

export const Primary = () => <Button className="primary"/>
export const Danger = () => <Button className="danger"/>
export const Success = () => <Button className="success"/>
export const Warning = () => <Button className="warning"/>
export const Default = () => <Button className="default"/>
export const AddToCart = () => <Button />
export const CartIcon = () => <Button />
export const AddToFavorites = () => <Button />
export const FavoritesIcon = () => <Button />
