//Dependencies
import React from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import AwesomeAlert from 'react-native-awesome-alerts';
//Routes
import Navigation from './src/router';
import createStore from './src/redux/createStore';
//Theme
import theme from './src/theme';

const store = createStore();

EStyleSheet.build(theme);

function App() {
	const state = store.getState()
	return (
		<Provider store={store}>
			<AwesomeAlert
				show={state.app.isLoading}
				showProgress={false}
				title='Instagram Clone'
				message='Loading'
				closeOnTouchOutside={true}
				closeOnHardwareBackPress={false}
			/>
			<Navigation />
		</Provider>
	);
}

export default App;
