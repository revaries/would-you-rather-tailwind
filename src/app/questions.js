import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Question from "./question";


function Questions() {
    const { question_id } = useParams();
    const requestedQuestion = useSelector((state) => state.questions[question_id])
    console.log(requestedQuestion)
    return (
        <div className="">
            {requestedQuestion ? <Question question={requestedQuestion}/> : <div />}
        </div>
    )
}

export default Questions;