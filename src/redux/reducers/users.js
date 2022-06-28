import { SET_USERS, ADD_QUESTION_TO_USER } from "./actions";

export default function UsersReducer(state = {}, action) {
    switch (action.type) {
        case SET_USERS:
            state = { ...state, ...action.payload };
            return state;
        case ADD_QUESTION_TO_USER:
            const username = action.payload.author;
            if (username in state) {
                if (state[username].questions) {
                    state[username].questions.push(action.payload.id)
                }
            }
            return state;
        default:
            return state;
    }
}