import { reducer as form } from 'redux-form'
import { combineReducers } from 'redux'
//Stores
import post from './post/reducer';
import app from './app/reducer';

const rootReducer = combineReducers({
  app,
  post,
  form
})

export default rootReducer