import { ADD_QUESTION, ANSWER_QUESTION, GET_ALL_QUESTIONS } from "./actions";

export default function QuestionsReducer(state = {}, action) {
    switch (action.type) {
        case GET_ALL_QUESTIONS:
            return state;
        case ADD_QUESTION:
            return state;
        case ANSWER_QUESTION:
            return state;
        default:
            return state
    }
}