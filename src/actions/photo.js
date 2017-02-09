import { actions } from '../constants'

export const startView = thumb =>　{
    //Show view box and image
    return {
        type: actions.START_VIEW,
        photo: thumb
    }
}

export const endView = ({
    type: actions.END_VIEW
})


export const nextView = () => {
    return (dispatch, getState) => {
        let thumbs = getState().thumbs
        let current = getState().photo.current
        let index = thumbs.indexOf(current)
        if(index >= (thumbs.length - 1)) {
            console.warn('You are on the last photo also.')
            return
        }
        let next = thumbs[thumbs.indexOf(current) + 1]
        dispatch({
            type: actions.START_VIEW,
            photo: next
        })
    }
}

export const preView = () => {
    return (dispatch, getState) => {
        let thumbs = getState().thumbs
        let current = getState().photo.current
        let index = thumbs.indexOf(current)
        if(index <= 0) {
            console.warn('You are on the first photo also.')
            return
        }
        let pre = thumbs[index - 1]
        dispatch({
            type: actions.START_VIEW,
            photo: pre
        })
    }
}

export const showView = () => {
    //Show view image
}

export const download = () => {

}
