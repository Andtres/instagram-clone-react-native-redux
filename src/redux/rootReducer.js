import { reducer as form } from 'redux-form'
import { combineReducers } from 'redux'
//
import post from './post/reducer';

const rootReducer = combineReducers({
  post,
  form
})

export default rootReducer