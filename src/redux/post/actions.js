import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
	getPosts: null,
  setPosts: ['posts']  
})

export { Types }
export default Creators
