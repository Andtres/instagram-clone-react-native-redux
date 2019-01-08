import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
	getPosts: [],
  setPosts: ['posts']
})

export { Types }
export default Creators
