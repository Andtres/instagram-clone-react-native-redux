//Dependencies
import { connect } from 'react-redux'
//Actions
import postsActions from '../../redux/post/actions'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
	getPosts: userName => dispatch(postsActions.getPosts(userName))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)
