import { SET_QUESTION, SET_QUESTIONS, ANSWER_QUESTION} from "./actions";

export default function QuestionsReducer(state = {}, action) {
    switch (action.type) {
        case SET_QUESTION:
            return { ...state, [action.payload.id]: action.payload };
        case ANSWER_QUESTION:
            return state;
        case SET_QUESTIONS:
            state = { ...state, ...action.payload };
            return state;
        default:
            return state
    }
}