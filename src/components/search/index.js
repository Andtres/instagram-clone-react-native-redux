//Dependencies
import React from 'react';
import { View, TextInput, Button } from 'react-native';
//Styles
import styles from './styles';
class Search extends React.Component {
	render() {
		const { change, search, submitHastag } = this.props;
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					value={search}
					placeholder='Search'
					onChangeText={search => change(search)}
					ref={ref => (this.input = ref)}
				/>
				<Button
					onPress={() => {
						this.input.blur()
						submitHastag()
						
					}}
					title='Search'
					color='#841584'
					styles={styles.button}
				/>
			</View>
		);
	}
}

export default Search;
