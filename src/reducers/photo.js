import { actions } from '../constants'

export default (state = { isPhotoMode: false }, action) => {
    switch(action.type) {
        case actions.START_VIEW: 
            console.log(action)
            return Object.assign({}, state, { current: action.photo, isPhotoMode: true })
        case actions.END_VIEW:
            return Object.assign({}, state)
        case actions.NEXT_VIEW: 
            return Object.assign({}, state)
        case actions.PRE_VIEW:
            return Object.assign({}, state)
        case actions.DOWNLOAD:
            return Object.assign({}, state)
        default:
            return state
    }
}