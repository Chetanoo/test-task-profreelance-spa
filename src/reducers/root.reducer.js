import { combineReducers } from 'redux'
import user from './user.reducer'
import alert from './alert.reducer'
import news from './news.reducer'

export default combineReducers({
  user,
  news,
  alert
})
