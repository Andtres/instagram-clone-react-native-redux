//Dependencies
import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TouchableWithoutFeedback,
	TouchableOpacity
} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Feather';
//Styles
import styles from './styles';
class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pressed: false
		};
	}

	onPressed = () => this.setState({ pressed: true });

	onPressOut = () => this.setState({ pressed: false });

	render() {
		const { pressed } = this.state;
		const {
			onPress,
			type,
			media,
			comments,
			likes,
			muted,
			userName,
			onVolume,
			isFirst
		} = this.props;
		return (
			<TouchableWithoutFeedback
				onPressIn={this.onPressed}
				onPressOut={this.onPressOut}
				onPress={onPress}>
				<View
					style={[
						styles.container,
						!pressed ? styles.withShadow : {},
						isFirst ? { marginTop: 0 } : {}
					]}>
					<View style={styles.top}>
						<View style={styles.topLeft}>
							<Image
								style={styles.userPhoto}
								source={{
									uri:
										'https://facebook.github.io/react-native/docs/assets/favicon.png'
								}}
							/>
							<Text style={styles.txtName}>{userName}</Text>
						</View>
						<Icon name='more-horizontal' style={styles.iconTop} />
					</View>

					{type === 'VIDEO' && (
						<Video
							ref={ref => (this.video = ref)}
							style={styles.videoBody}
							source={{ uri: media }}
							playWhenInactive={false}
							repeat
							volume={muted ? 0.0 : 1.0}
						/>
					)}
					{type === 'IMAGE' && (
						<Image
							style={styles.imageBody}
							source={{
								uri: media
							}}
						/>
					)}
					<View style={styles.footer}>
						<View style={styles.row}>
							<Icon name='heart' style={styles.iconFooter} />
							<Text>{comments}</Text>
							<Icon name='message-circle' style={styles.iconFooter} />
							<Text>{likes}</Text>
							<Icon name='corner-up-right' style={styles.iconFooter} />
						</View>

						{type === 'VIDEO' && (
							<TouchableOpacity onPress={() => onVolume}>
								<View>
									<Icon
										name={muted ? 'volume-x' : 'volume-2'}
										style={styles.iconFooter}
									/>
								</View>
							</TouchableOpacity>
						)}
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default Post;
