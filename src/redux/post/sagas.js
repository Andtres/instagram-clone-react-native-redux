//Dependencies
import { takeLatest, put, all, call } from 'redux-saga/effects';
//Actions
import postActions, { Types } from './actions';
import appActions from '../app/actions';
//Get User Intagram
import {
	getHastagId as getHastagIdService,
	getHastag as getHastagService
} from './services';

function* getPosts({ hashtag }) {
	yield put(appActions.setLoading(true));
	try {
		const hastagId = yield call(getHastagIdService, hashtag);

		const hastag = yield call(getHastagService, hastagId.data[0].id);

		yield put(postActions.setPosts(hastag.data));
	} catch (error) {
		console.log(error);
	}
	yield put(appActions.setLoading(false));
}

export default all([takeLatest(Types.GET_POSTS, getPosts)]);
