//Dependencies
import React, { Component } from 'react';
import {
	SafeAreaView,	
	ScrollView,
	View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
//Const Roues
import routes from '../../router/const';
//Store
import store from './store';
//Component
import Post from '../../components/post';

class Home extends Component {
	componentDidMount() {
		const { getPosts } = this.props;
		getPosts();
	}
	onPress = () => Actions[routes.POST_DETAIL]();
	render() {
		return (
			<SafeAreaView>
				<ScrollView>
					<View style={{ marginBottom: 40 }}>
						<Post onPress={this.onPress} />
						<Post onPress={this.onPress} />
						<Post onPress={this.onPress} />
						<Post onPress={this.onPress} />
						<Post onPress={this.onPress} />
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}

export default store(Home);
