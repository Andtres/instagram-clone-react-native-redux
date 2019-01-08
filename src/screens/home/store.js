//Dependencies
import { connect } from 'react-redux'
//Actions
import postsActions from '../../redux/post/actions'

function mapStateToProps (store) {
  return {
		posts: store.post.posts ? store.post.posts : []
  }
}

const mapDispatchToProps = dispatch => ({
	getPosts: userName => dispatch(postsActions.getPosts(userName))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)
