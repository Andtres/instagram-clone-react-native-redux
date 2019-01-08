//Dependencies
import { takeLatest, put, all, call } from 'redux-saga/effects';
//Actions
import postActions, { Types } from './actions';
//Get User Intagram
import {
	getPosts as getPostsService,
	getUsers as getUsersService,
	getComments as getCommentsService	
} from './services';

function* getPosts(action) {	
	try {
		const posts = yield call(getPostsService);		
		yield put(postActions.setPosts(posts));
	} catch (error) {
		console.log(error);
	}
}

function* getUsers(action) {	
	try {
		const users = yield call(getUsersService);		
		yield put(postActions.setUsers(users));
	} catch (error) {
		console.log(error);
	}
}

function* getComments(action) {	
	try {
		const comments = yield call(getCommentsService);		
		yield put(postActions.setComments(comments));
	} catch (error) {
		console.log(error);
	}
}

export default all([
	takeLatest(Types.GET_POSTS, getPosts),
	takeLatest(Types.GET_USERS, getUsers),
	takeLatest(Types.GET_COMMENTS, getComments)
]);
