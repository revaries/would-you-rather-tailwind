import { LOGIN_USER, LOGOUT_USER } from "./actions";

export default function AuthenticationReducer(state = {
    loggedInUser: null
}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { loggedInUser: action.payload };
        case LOGOUT_USER:
            return { loggedInUser: null };
        default:
            return state;
    }
}