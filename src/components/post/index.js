//Dependencies
import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
//Styles
import style from './styles';
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
		const { onPress } = this.props
		return (
			<TouchableWithoutFeedback
				onPressIn={this.onPressed}
				onPressOut={this.onPressOut}
				onPress={onPress}>
				<View style={[style.container, !pressed ? styles.withShadow : {}]}>
					<View style={style.top}>
						<View style={style.topLeft}>
							<Image
								source={require('../../assets/images/font.jpg')}
								style={style.userPhoto}
							/>
							<Text style={style.txtName}>Tesjrofjroifjrofj</Text>
						</View>
						<Icon name='more-horizontal' style={style.iconTop} />
					</View>
					<View>
						<Image
							source={require('../../assets/images/BeagleLove.jpg')}
							style={style.imageBody}
						/>
					</View>
					<View style={style.footer}>
						<Icon name='heart' style={style.iconFooter} />
						<Icon name='message-circle' style={style.iconFooter} />

						<Icon name='corner-up-right' style={style.iconFooter} />
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default Post;
