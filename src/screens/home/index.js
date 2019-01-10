//Dependencies
import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AwesomeAlert from 'react-native-awesome-alerts';
//Const Routes
import routes from '../../router/const';
//Store
import store from './store';
//Component
import Search from '../../components/search';
import Post from '../../components/post';
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			playing: null,
			search: ''
		};
	}
	componentDidMount() {
		const { getData } = this.props;
		getData('gaticos');
	}

	onChange = search => {
		this.setState({ search: search });
	};

	submitHastag = () => {
		this.props.getData(this.state.search);
		console.log(this.state.search);
	};

	onVolume = id => this.setState({ playing: id });

	onPress = () => Actions[routes.POST_DETAIL]();
	render() {
		const { posts, isLoading } = this.props;
		const { search } = this.state;

		return (
			<SafeAreaView>
				<Search
					change={this.onChange}
					search={search}
					submitHastag={this.submitHastag}
				/>
				<ScrollView contentContainerStyle={{minHeight: '100%'}}>
					<AwesomeAlert
						show={isLoading}
						showProgress={false}						
						message='Loading'
						closeOnTouchOutside={true}
						closeOnHardwareBackPress={false}
						showProgress
					/>
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
