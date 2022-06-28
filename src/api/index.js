import { _getQuestions, _getUsers } from "./_DATA";

export default function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]);
}