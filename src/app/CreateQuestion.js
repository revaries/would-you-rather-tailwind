import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CREATE_QUESTION } from "../redux/reducers/actions";

function CreateQuestion() {
    const dispatch = useDispatch();
    const history = useHistory();
    const author = useSelector(state => state.authentication);
    const [question1, setQuestion1] = useState("");
    const [question2, setQuestion2] = useState("");
    const [questionAdded, setQuestionAdded] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        const payload  = {
            optionOneText: question1,
            optionTwoText: question2,
            author: author.loggedInUser
        }
        dispatch({
            type: CREATE_QUESTION,
            payload
        });
        setQuestion1("");
        setQuestion2("");
        setQuestionAdded(true);
        setTimeout(() => {history.push("/feed")}, 1500);
    }
    return (
        <div className="border my-5 p-5 space-y-8 rounded">

            { questionAdded &&
                <div className="text-center font-sans font-semibold text-green-600	text-base">
                    <h2 className=""> Question Added!!!!!</h2>
                </div>}

            <div className="border-b border-indigo-200 rounded bg-indigo-300 py-6 text-center text-white">
                <h1>Complete the Question</h1>
            </div>
            <p className="px-2">Would you rather .... </p>
            <form action="submit px-3 space-y-5">
                <div className="flex flex-col space-y-5">
                    <input 
                        type="text" name="optionA" 
                        id="optionA" placeholder="Enter Option A" 
                        className="py-3 px-3 border rounded" 
                        value={question1}
                        onChange={event => {setQuestion1(event.target.value)}}/>
                    <input 
                        type="text" name="optionB" 
                        id="optionB" placeholder="Enter Option B" 
                        className="py-3 px-3 border rounded" 
                        value={question2}
                        onChange={event => {setQuestion2(event.target.value)}}/>
                </div>
                <input type="submit" value="create" onClick={handleSubmit} className="bg-indigo-500 text-center text-white px-5 py-3 w-full rounded my-5" />
            </form>
        </div>
    )
}

export default CreateQuestion;