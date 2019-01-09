import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({  
  setLoading: ['loading']
})

export { Types }
export default Creators
