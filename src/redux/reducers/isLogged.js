const initialState = {
    isLogged: false
}

export default function loggedReducer(state = initialState, action) {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                isLogged: !state.isLogged,
                name: action.payload.name,
                gender: action.payload.gender,
                email: action.payload.email,
                password: action.payload.password,
                dob: action.payload.dob
            }
        case 'SIGN_OUT':
            return initialState
        default:
            return state
    }
}
