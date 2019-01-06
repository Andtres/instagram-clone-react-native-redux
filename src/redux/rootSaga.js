//Dependencies
import { all } from 'redux-saga/effects'
//Sagas
import post from './post/sagas'

function* rootSaga() {
	yield all([post])
}

export default rootSaga
