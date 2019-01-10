import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
	getPosts: ['hashtag'],
  setPosts: ['posts']  
})

export { Types }
export default Creators
