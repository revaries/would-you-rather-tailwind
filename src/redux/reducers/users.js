import { SET_USERS, ADD_QUESTION_TO_USER, ADD_ANSWERED_QUESTION_TO_THE_USER } from "./actions";

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
        case ADD_ANSWERED_QUESTION_TO_THE_USER:
            state = {
                ...state,
                [action.payload.authedUser]: {
                  ...state[action.payload.authedUser],
                  answers: {
                    ...state[action.payload.authedUser].answers,
                    [action.payload.qid]: action.payload.answer
                  }
                }
              }
              return state;
        default:
            return state;
    }
}