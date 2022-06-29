import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import getInitialData from '../../api';
import { _saveQuestion, _saveQuestionAnswer } from '../../api/_DATA';
import { 
    CREATE_QUESTION, 
    SET_QUESTIONS, 
    SET_USERS, 
    ANSWER_QUESTION, 
    GET_DATA, 
    SET_QUESTION, 
    ADD_QUESTION_TO_USER, 
    ADD_ANSWERED_USER_TO_QUESTIONS, 
    ADD_ANSWERED_QUESTION_TO_THE_USER} from '../reducers/actions';

function* getAllData(action) {
    try {
        const response = yield call(getInitialData);
        const [ users, questions ] = response;
        yield put({ type: SET_USERS, payload: users });
        yield put({ type: SET_QUESTIONS, payload: questions });
    } catch (error) {
        console.log("Something went wrong while fetching All Data-> err: ", error);
    }
}

function* createQuestion(action) {
    try {
        const response = yield call(_saveQuestion, action.payload);
        yield put({ type: SET_QUESTION, payload: response });
        yield put({ type: ADD_QUESTION_TO_USER, payload: response})
    } catch (error) {
        console.log("Something went wrong while creating Question-> err: ", error);
    }
}

function* answerQuestion(action) {
    try {
        yield call(_saveQuestionAnswer, action.payload);
        yield put({type: ADD_ANSWERED_USER_TO_QUESTIONS, payload: action.payload})
        yield put({type: ADD_ANSWERED_QUESTION_TO_THE_USER, payload: action.payload})
    } catch(error) {
        console.log("Something went wrong while answering the question-> err:", error);
    }
}


export function* watcherSaga() {
    yield all([
        takeLatest(GET_DATA, getAllData),
        takeEvery(CREATE_QUESTION, createQuestion),
        takeEvery(ANSWER_QUESTION, answerQuestion)
    ]);
}