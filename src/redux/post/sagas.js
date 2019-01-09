//Dependencies
import { takeLatest, put, all, call } from 'redux-saga/effects';
//Actions
import postActions, { Types } from './actions';
import appActions from '../app/actions';
//Get User Intagram
import {
	getHastagId as getHastagIdService,
	getHastag as getHastagService,	
} from './services';

function* getPosts() {	
	yield put(appActions.setLoading(true))
	try {
		const hastagId = yield call(getHastagIdService);
		console.log('iddads', hastagId.data[0].id);
		const hastag = yield call(getHastagService, hastagId)
		console.log('datos', hastag); 		
		yield put(postActions.setPosts(hastag.data));
	} catch (error) {
		console.log(error);
	}
	yield put(appActions.setLoading(false)) 
}

export default all([
	takeLatest(Types.GET_POSTS, getPosts)
]);
