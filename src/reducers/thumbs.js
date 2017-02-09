import { actions } from '../constants'

export default (state = [], action) => {
    switch(action.type) {
        case actions.SNAP:
            return [{ dataURI: action.dataURI, meta: action.meta }, ...state ]
        default:
            return state
    }
}
