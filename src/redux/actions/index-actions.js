export const SignInUser = (userObj) => {
    return {
        type: 'SIGN_IN',
        payload: userObj
    }
}
export const SignOutUser = () => {
    return {
        type: 'SIGN_OUT'
    }
}
export const SetMFList = (MFList) => {
    return {
        type: 'SET_MF',
        payload: MFList
    }
}