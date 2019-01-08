//Dependencies
import { createReducer } from 'reduxsauce';
//Actions
import { Types } from './actions';
//State
import INITIAL_STATE from './initialState';

function setPosts(state, { posts }) {
	return Object.assign({}, { ...state, posts });
}

function setUsers(state, { users }) {
	return Object.assign({}, { ...state, users });
}

function setComments(state, { comments }) {
	return Object.assign({}, { ...state, comments });
}

const reducer = createReducer(INITIAL_STATE, {
	[Types.SET_POSTS]: setPosts,
	[Types.SET_USERS]: setUsers,
	[Types.SET_COMMENTS]: setComments
});

export default reducer;
