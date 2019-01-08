//Dependencies
import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
//Const Routes
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
		const { posts } = this.props;
		console.log('post obtenidos', posts);
		return (
			<SafeAreaView>
				<ScrollView>
					<View style={{ marginBottom: 40 }}>
						{console.log('dentro del return', 'longitud', posts)}
						{posts.map(post => (
							<Post key={post.id} onPress={this.onPress} />
						))}
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}

export default store(Home);
