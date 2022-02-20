import { GET_LEADERS_LIST, GET_USERS } from "./actions";

export default function UsersReducer(state = {}, action) {
    switch (action.type) {
        case GET_USERS:
            return state;
        case GET_LEADERS_LIST:
            return state;
        default:
            return state;
    }
}