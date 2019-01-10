//Dependencies
import { createReducer } from 'reduxsauce';
//Actions
import { Types } from './actions';
//State
import INITIAL_STATE from './initialState';

function setLoading(state, { loading }) {
	return Object.assign({}, { ...state, isLoading: loading });
}

const reducer = createReducer(INITIAL_STATE, {
	[Types.SET_LOADING]: setLoading
});

export default reducer;