import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<div className="collection-page">
			<h2 className="title">{title}</h2>
			<div className="items">
				{items.map(item => (
					<CollectionItem className="collection-item" item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	const getCollection = selectCollection(ownProps.match.params.collectionId);
	console.log(getCollection(state));
	return {
		collection: getCollection(state)
	};
};

export default connect(mapStateToProps)(CollectionPage);
