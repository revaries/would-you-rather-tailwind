import { SET_QUESTION, SET_QUESTIONS, ADD_ANSWERED_USER_TO_QUESTIONS} from "./actions";

export default function QuestionsReducer(state = {}, action) {
    switch (action.type) {
        case SET_QUESTION:
            return { ...state, [action.payload.id]: action.payload };
        case ADD_ANSWERED_USER_TO_QUESTIONS:
            state = {
                ...state,
                [action.payload.qid]: {
                  ...state[action.payload.qid],
                  [action.payload.answer]: {
                    ...state[action.payload.qid][action.payload.answer],
                    votes: state[action.payload.qid][action.payload.answer].votes.concat([action.payload.authedUser])
                  }
                }
              }
              return state;
        case SET_QUESTIONS:
            state = { ...state, ...action.payload };
            return state;
        default:
            return state
    }
}