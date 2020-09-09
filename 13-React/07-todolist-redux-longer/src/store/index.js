import { createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer.js'


//创建store
const store = createStore(reducer)

export default store