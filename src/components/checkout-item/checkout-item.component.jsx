import React from 'react';
import { connect } from 'react-redux';

import {
	clearItemFromCart,
	addCartItem,
	removeItem
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({
	cartItem,
	clearItem,
	addItemToCart,
	removeItemFromCart
}) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeItemFromCart(cartItem)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItemToCart(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<span className="remove-button" onClick={() => clearItem(cartItem)}>
				&#10005;
			</span>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		clearItem: item => dispatch(clearItemFromCart(item)),
		addItemToCart: item => dispatch(addCartItem(item)),
		removeItemFromCart: item => dispatch(removeItem(item))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(CheckoutItem);
