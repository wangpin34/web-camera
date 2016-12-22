import { actions } from '../constants'

export const snap = (dataURI, meta) => {
    return {
        type: actions.SNAP,
        dataURI,
        meta
    }
}
