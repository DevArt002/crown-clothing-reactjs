import ShopActionTypes from './shop.types';
import {
	firestore,
	convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap
});

export const fetchCollctionsFailure = error => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_FAILTURE,
	payload: error.message
});

export const fetchCollectionsStartAsync = () => {
	return dispatch => {
		const collectionRef = firestore.collection('collections');
		dispatch(fetchCollectionsStart());

		collectionRef
			.get()
			.then(snapshot => {
				const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

				dispatch(fetchCollectionsSuccess(collectionsMap));
			})
			.catch(error => {
				dispatch(fetchCollctionsFailure(error));
			});
	};
};