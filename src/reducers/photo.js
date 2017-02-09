import { actions } from '../constants'

export default (state = {}, action) => {
    switch(action.type) {
        case actions.START_VIEW:
            return { ...state, current: action.photo }
        case actions.END_VIEW:
            return { ...state, current: undefined }
        case actions.DOWNLOAD:
            return Object.assign({}, state)
        default:
            return state
    }
}
