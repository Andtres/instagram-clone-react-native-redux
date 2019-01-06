import { createReducer } from 'reduxsauce'

import { Types } from './actions'
import INITIAL_STATE from './initialState'

function setPosts(state, { posts }) {
	return Object.assign({}, { ...state, posts })
}

const reducer = createReducer(INITIAL_STATE, {
	[Types.SET_POSTS]: setPosts
})

export default reducer
