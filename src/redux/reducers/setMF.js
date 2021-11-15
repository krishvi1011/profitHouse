import {MF_CONSTANTS} from "../actions/constants"
const initialState = []

export default function mfReducer(state = initialState, action) {
    switch (action.type) {
        case MF_CONSTANTS.SET_MF:
            return action.payload
        default:
            return state
    }
}