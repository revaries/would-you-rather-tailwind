import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import getInitialData from '../../api';
import { _saveQuestion } from '../../api/_DATA';
import { CREATE_QUESTION, SET_QUESTIONS, SET_USERS, ANSWER_QUESTION, GET_DATA, SET_QUESTION, ADD_QUESTION_TO_USER } from '../reducers/actions';

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
        console.log(response)
        yield put({ type: SET_QUESTION, payload: response });
        yield put({ type: ADD_QUESTION_TO_USER, payload: response})
    } catch (error) {
        console.log("Something went wrong while creating Question-> err: ", error);
    }
}

function* answerQuestion(action) {
    
}


export function* watcherSaga() {
    yield all([
        takeLatest(GET_DATA, getAllData),
        takeEvery(CREATE_QUESTION, createQuestion),
        takeEvery(ANSWER_QUESTION, answerQuestion)
    ]);
}