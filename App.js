//Dependencies
import React from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
//Routes
import Navigation from './src/router';
import createStore from './src/redux/createStore';
//Theme
import theme from './src/theme';

const store = createStore();

EStyleSheet.build(theme);

function App() {	
	return (
		<Provider store={store}>			
			<Navigation />
		</Provider>
	);
}

export default App;
