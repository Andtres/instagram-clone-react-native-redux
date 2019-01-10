//Dependencies
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 5,
		marginVertical: 5
	},
	input: {
		height: 40,
		width: '60%',
		borderColor: '$colors.purpure',
		borderWidth: 1,
		borderRadius: 30
	},
	button: {
		width: '20%'
	}
});
