//Dependencies
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
//Styles
import styles from './styles';

class Commentary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			object: ''
		};
	}

	render() {
		const { commentary } = this.props
		return (
			<View style={styles.container}>
				<View style={styles.left}>
					<Image
						style={styles.avatar}
						source={{
							uri:
							'https://facebook.github.io/react-native/docs/assets/favicon.png'
						}}
					/>
				</View>
				<View style={styles.right}>        
        <Text style={styles.caption}>{commentary}</Text>
        </View>
			</View>
		);
	}
}

export default Commentary;
