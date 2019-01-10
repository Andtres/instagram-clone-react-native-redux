//Dependencies
import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AwesomeAlert from 'react-native-awesome-alerts';
import Carousel from 'react-native-snap-carousel';
//Const Routes
import routes from '../../router/const';
//Store
import store from './store';
//Component
import Search from '../../components/search';
import Post from '../../components/post';

const { width: viewportWidth } = Dimensions.get('window');
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

	onChange = search => this.setState({ search: search });

	submitHastag = () => {
		this.props.getData(this.state.search)
		this.scroll.scrollTo({x: 0, y: 0, animated: true})
	}

	onVolume = id => this.setState({ playing: id });

	onPress = post => {		
		this.props.selectPost(post);
		Actions[routes.POST_DETAIL]();
	};

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
				<ScrollView
					contentContainerStyle={{ minHeight: '100%' }}
					ref={ref => (this.scroll = ref)}>
					<AwesomeAlert
						show={isLoading}
						showProgress={false}
						message='Loading'
						closeOnTouchOutside={true}
						closeOnHardwareBackPress={false}
						showProgress
					/>
					<View style={{ marginBottom: 40 }}>
						{posts.map((post, index) =>
							post.media_type === 'CAROUSEL_ALBUM' ? (
								<Carousel
									key={post.id}
									layout='default'
									sliderWidth={viewportWidth}
									itemWidth={viewportWidth}
									data={post.children.data}
									layoutCardOffset={18}
									inactiveSlideOpacity={1}
									inactiveSlideScale={1}
									renderItem={({ item }) => (
										<Post
											muted={this.state.playing !== item.id}
											key={item.id}
											id={item.id}
											type={item.media_type}
											userName={post.media_type}
											comments={post.comments_count}
											likes={post.like_count}
											media={item.media_url}
											isFirst={index===0}
											onVolume={() => this.onVolume(item.id)}
											onPress={() => this.onPress(post)}
										/>
									)}
								/>
							) : (
								<Post
									muted={this.state.playing !== post.id}
									key={post.id}
									id={post.id}
									type={post.media_type}
									userName={post.media_type}
									comments={post.comments_count}
									likes={post.like_count}
									media={post.media_url}
									isFirst={index===0}
									onVolume={() => this.onVolume(post.id)}
									onPress={() => this.onPress(post)}
								/>
							)
						)}
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}

export default store(Home);
