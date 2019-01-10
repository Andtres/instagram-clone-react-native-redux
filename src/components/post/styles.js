//Dependencies
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	$imageUserTop: 42,
	$heightIcon: 10,
	withShadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 6
		},
		shadowOpacity: 0.37,
		shadowRadius: 7.49,

		elevation: 12
	},
	container: {
		backgroundColor: '$colors.white',
		marginVertical: 12,
		flex: 1,
		position: 'relative',
		zIndex: 1		
	},
	top: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 9,
		paddingVertical: 13
	},
	topLeft: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	txtName: {
		fontSize: 12,
		fontWeight: 'bold',
		color: '$colors.black',
		marginLeft: 10
	},
	iconTop: {
		fontSize: 22,
		color: '$colors.black'
	},
	userPhoto: {
		width: '$imageUserTop',
		height: '$imageUserTop',
		borderRadius: '$imageUserTop / 2'
	},
	imageBody: {
		width: '100%',
		height: 300,
		resizeMode: 'cover'
	},
	videoBody:{
		width: '100%',
		height: 300,
	},		
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 10,
		paddingHorizontal: 8
	},
	iconFooter: {
		fontSize: 24,
		color: '$colors.gray',
		marginRight: 6
	},
	txt: {
		color: '$colors.blue'
	},
	row: {
		flexDirection: 'row'
	}
});
