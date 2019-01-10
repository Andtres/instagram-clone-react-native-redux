import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
	getPosts: ['hashtag'],
  setPosts: ['posts'],
  selectPost: ['selectPost']
})

export { Types }
export default Creators
