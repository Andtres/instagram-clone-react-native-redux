//Dependencies
import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
//Const Routes
import routes from '../../router/const';
//Store
import store from './store';
//Component
import Post from '../../components/post';
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			playing: null
		};
	}
	componentDidMount() {
		const { getData } = this.props;
		getData();
	}

	onVolume = id => this.setState({ playing: id });

	onPress = () => Actions[routes.POST_DETAIL]();
	render() {
		const { posts } = this.props;
		console.log('post obtenidos', posts);
		return (
			<SafeAreaView>
				<ScrollView>
					<View style={{ marginBottom: 40 }}>
						{posts.map(post => (
							<Post
								muted={this.state.playing !== post.id}
								key={post.id}
								id={post.id}
								type={post.media_type}
								comments={post.comments_count}
								likes={post.like_count}
								media={post.media_url}
								onVolume={() => this.onVolume(post.id)}
								images={post.children || []}
							/>
						))}
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}

export default store(Home);
