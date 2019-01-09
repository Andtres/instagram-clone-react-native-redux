//Dependencies
import { createReducer } from 'reduxsauce';
//Actions
import { Types } from './actions';
//State
import INITIAL_STATE from './initialState';

function setPosts(state, { posts }) {
	return Object.assign({}, { ...state, posts });
}

const reducer = createReducer(INITIAL_STATE, {
	[Types.SET_POSTS]: setPosts
});

export default reducer;
