//Dependencies
import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
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
		const { onPress, photo, userName } = this.props;	
		return (
			<TouchableWithoutFeedback
				onPressIn={this.onPressed}
				onPressOut={this.onPressOut}
				onPress={onPress}>
				<View style={[styles.container, !pressed ? styles.withShadow : {}]}>
					<View style={styles.top}>
						<View style={styles.topLeft}>
							<Image
								style={styles.userPhoto}
								source={{
									uri: photo										
								}}
							/>
							<Text style={styles.txtName}>{userName}</Text>
						</View>
						<Icon name='more-horizontal' style={styles.iconTop} />
					</View>
					<View>
						<Image
							style={styles.imageBody}
							source={require('../../assets/images/BeagleLove.jpg')}
						/>
					</View>
					<View style={styles.footer}>
						<Icon name='heart' style={styles.iconFooter} />
						<Icon name='message-circle' style={styles.iconFooter} />

						<Icon name='corner-up-right' style={styles.iconFooter} />
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default Post;
