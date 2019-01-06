//Dependencies
import React, { Component } from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
//Screnns
import Home from '../screens/home';
import Post from '../screens/post';
//Const Routes
import routes from './const';

class Navigation extends Component {
	render() {
		return (
			<Router>
				<Stack key='root'>
					<Scene key={routes.HOME} component={Home} title='Home' />
					<Scene key={routes.POST_DETAIL} component={Post} />
				</Stack>
			</Router>
		);
	}
}

export default Navigation;
