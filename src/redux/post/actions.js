import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
	getPosts: ['userName'],
  setPosts: ['posts']
})

export { Types }
export default Creators
