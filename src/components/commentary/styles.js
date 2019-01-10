//Dependencies
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  $border: 25,
  $avatar: 72,
  container: {
    flexDirection: 'row',
    width: '95%',    
    alignSelf: 'center',
    marginVertical: 8,
    marginBottom: 200          
  },
  left: {
    width: '30%',
    height: '100%',
    backgroundColor: '$colors.white',
    borderTopLeftRadius: '$border',    
    justifyContent: 'center'
  },
  avatar: {
    width: '$avatar',
    height: '$avatar',    
    borderRadius: '$avatar / 2',
    alignSelf: 'center'    
  },
  right:{
    width: '70%',
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: '$colors.purpure',
    borderBottomRightRadius: '$border',    
  },
  caption: {
    color: '$colors.white'
  }
});
