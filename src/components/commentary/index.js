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
		return (
			<View style={styles.container}>
				<View style={styles.left}>
					<Image
						style={styles.avatar}
						source={{
							uri:
								'https://images.pexels.com/photos/1009949/pexels-photo-1009949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
						}}
					/>
				</View>
				<View style={styles.right}>
        <Text style={styles.userName}>UserName</Text>
        <Text style={styles.commentary}>Comentary</Text>
        </View>
			</View>
		);
	}
}

export default Commentary;
