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


export const nextView = ({
    type: actions.NEXT_VIEW
})

export const preView = ({
    type: actions.PRE_VIEW
})

export const showView = () => {
    //Show view image
}

export const download = () => {

}

