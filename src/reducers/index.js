import { combineReducers } from 'redux'
import thumbs  from './thumbs'
import photo from './photo'

export default combineReducers({
  thumbs,
  photo
})