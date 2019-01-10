//Dependencies
import { createReducer } from 'reduxsauce';
//Actions
import { Types } from './actions';
//State
import INITIAL_STATE from './initialState';

function setPosts(state, { posts }) {
	return Object.assign({}, { ...state, posts });
}
function selectPosts(state, { selectPost }) {	
	return Object.assign({}, { ...state, selectPost });
}

const reducer = createReducer(INITIAL_STATE, {
	[Types.SET_POSTS]: setPosts,
	[Types.SELECT_POST]: selectPosts
});

export default reducer;
