import { combineReducers } from "redux";
import loggedReducer from "./isLogged";
import mfReducer from "./setMF";

const rootReducer = combineReducers({
    logged: loggedReducer,
    setMF: mfReducer
})

export default rootReducer
