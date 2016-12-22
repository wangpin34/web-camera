import { actions } from '../constants'

export default (state = [], action) => {
    switch(action.type) {
        case actions.SNAP: 
            state.unshift({ dataURI: action.dataURI, meta: action.meta })
            return [].concat(state)
        default:
            return state
    }
}