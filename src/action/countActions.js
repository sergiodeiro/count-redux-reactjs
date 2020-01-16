import {CONSTANTS} from '../constants/index'

export const inc = () => {
    return { type: CONSTANTS.INC}
}

export const dec = () => {
    return {type: CONSTANTS.DEC}
}

export const dois = () => {
    return {type: CONSTANTS.DOIS}
}

export const stepChanged = (e) => {
    return {
        type: CONSTANTS.STEP_CHANGED,
        payload: e.target.value
    }
}