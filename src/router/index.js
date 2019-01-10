//Dependencies
import React, { Component } from 'react';
import { Scene, Router, Stack, Modal } from 'react-native-router-flux';
import { Text } from 'react-native';
//Screnns
import Home from '../screens/home';
import Post from '../screens/post';
//Const Routes
import routes from './const';

class Navigation extends Component {
	render() {
		return (
			<Router>
				<Modal hideNavBar>
					<Stack key='root'>
						<Scene key={routes.HOME} component={Home} title='InstagramClone' />
						<Scene
							key={routes.POST_DETAILS}							
							component={Post}				
							direction='horizontal'			
						/>						
					</Stack>										
				</Modal>
			</Router>
		);
	}
}

export default Navigation;
