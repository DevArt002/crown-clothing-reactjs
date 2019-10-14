import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	collections => collections
);

export const selectCollection = collectionId => {
	return createSelector(
		[selectCollections],
		collections =>
			collections.find(collection => collection.routeName === collectionId)
	);
};
