const initialState = []

export default function mfReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_MF':
            return action.payload
        default:
            return state
    }
}