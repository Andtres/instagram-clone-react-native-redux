//Dependencies
import { takeLatest, put, all, call } from 'redux-saga/effects';
//Actions
import postActions, { Types } from './actions';
//Get User Intagram
import { getPosts as getPostsService } from './services';

function* getPosts(action) {
	console.log(action);
	try {
		const posts = yield call(getPostsService);
		//console.log(posts)
		yield put(postActions.setPosts(posts));
	} catch (error) {
		console.log(error);
	}
}

export default all([takeLatest(Types.GET_POSTS, getPosts)]);
