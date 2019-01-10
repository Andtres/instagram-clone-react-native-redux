//Dependencies
import React, { Component } from 'react';
import { SafeAreaView, Dimensions, ScrollView, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
//Component
import Commentary from '../../components/commentary';
import Post from '../../components/post';
import store from './store';

const { width: viewportWidth } = Dimensions.get('window');
class PostDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			playing: null
		};
	}
	onVolume = id => this.setState({ playing: id });
	render() {
		const { post } = this.props;
		const { caption } = post;		
		return (
			<SafeAreaView contentContainerStyle={{ minHeight: '100%' }}>
				<ScrollView>
					<View style={{ marginBottom: 40 }}>
						{post.media_type === 'CAROUSEL_ALBUM' ? (
							<Carousel
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
										onVolume={() => this.onVolume(item.id)}
										onPress={() => {}}
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
								onVolume={() => this.onVolume(post.id)}
								onPress={() => {}}
							/>
						)}						
						<Commentary commentary={caption} />
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}

export default store(PostDetail);
