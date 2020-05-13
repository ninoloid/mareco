import { combineReducers } from 'redux'
import userReducer from './userReducer'
import postReducer from './postReducer'
import replyReducer from './replyReducer'

export default combineReducers({
  userReducer,
  postReducer,
  replyReducer
})