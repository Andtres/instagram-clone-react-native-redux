import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
	getPosts: [],
  setPosts: ['posts'],
  getUsers: [],
  setUsers: ['users'],
  getComments: [],
  setComments: ['comments']
})

export { Types }
export default Creators
