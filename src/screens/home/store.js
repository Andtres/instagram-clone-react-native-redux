//Dependencies
import { connect } from 'react-redux'
//Actions
import postsActions from '../../redux/post/actions'

function mapStateToProps (store) {
  return {
		posts: store.post.posts ? store.post.posts : [],
		isLoading: store.app.isLoading
  }
}

const mapDispatchToProps = dispatch => ({
	getData: () => dispatch(postsActions.getPosts())	
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)
