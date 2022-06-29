import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Question from "./question";


function Questions() {
    const { question_id } = useParams();
    const requestedQuestion = useSelector((state) => state.questions[question_id])
    const authenticatedUser = useSelector((state) => state.authentication.loggedInUser);
    const currentUser = useSelector((state) => state.users[authenticatedUser])
    
    return (
        <div className="">
            {requestedQuestion ? <Question question={requestedQuestion} isAnswerable={!currentUser.answers[question_id]}/> : <div />}
        </div>
    )
}

export default Questions;