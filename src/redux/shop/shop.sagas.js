import { takeEvery, call, put } from 'redux-saga/effects';

import {
	firestore,
	convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

import {
	fetchCollectionsSuccess,
	fetchCollectionsFailure
} from '../shop/shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
	try {
		const collectionsRef = firestore.collection('collections');
		const snapshot = yield collectionsRef.get();
		const collectionsMap = yield call(
			convertCollectionsSnapshotToMap,
			snapshot
		);
		yield put(fetchCollectionsSuccess(collectionsMap)); // dispatch
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message)); // dispatch
	}
}

export function* fetchCollectionsStart() {
	yield takeEvery(
		ShopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync
	);
}
