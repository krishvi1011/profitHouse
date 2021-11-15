import {LOGIN_CONSTANTS, MF_CONSTANTS} from "./constants"
export const SignInUser = (userObj) => {
    return {
        type: LOGIN_CONSTANTS.SIGN_IN,
        payload: userObj
    }
}
export const SignOutUser = () => {
    return {
        type: LOGIN_CONSTANTS.SIGN_OUT
    }
}
export const SetMFList = (MFList) => {
    return {
        type: MF_CONSTANTS.SET_MF,
        payload: MFList
    }
}