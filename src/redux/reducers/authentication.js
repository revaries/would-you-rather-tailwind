import { LOGIN_USER, LOGOUT_USER } from "./actions";

export default function AuthenticationReducer(state = {
    loggedInUser: null
}, action) {
    switch (action.type) {
        case LOGIN_USER:
            console.log("Inside AuthenticationReducer: LOGIN_USER");
            console.log("action.payload: ", action.payload);
            return { loggedInUser: action.payload };
        case LOGOUT_USER:
            return { loggedInUser: null };
        default:
            return state;
    }
}