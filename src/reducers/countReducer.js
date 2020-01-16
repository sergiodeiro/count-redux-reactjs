import {CONSTANTS} from '../constants/index'

const INITIAL_SATE = {
    step: 1,
    number: 0
}

export default (state = INITIAL_SATE, action) => {
    
    switch(action.type){
        case CONSTANTS.INC: 
            return {...state, number: state.number + state.step}
        case CONSTANTS.DEC:
            return {...state, number: state.number - state.step}
        case CONSTANTS.DOIS: 
            return {...state, number: state.number + (state.step + 1)}
        case CONSTANTS.STEP_CHANGED:
            return {...state, step: +action.payload}
        default:
            return state
    }

}