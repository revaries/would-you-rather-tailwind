import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_QUESTION } from "../redux/reducers/actions";

function CreateQuestion() {
    const dispatch = useDispatch();
    const author = useSelector(state => state.authentication);
    const [question1, setQuestion1] = useState("");
    const [question2, setQuestion2] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log("I am inside the andleSubmit function");
        const payload  = {
            optionOneText: question1,
            optionTwoText: question2,
            author: author.loggedInUser
        }
        console.log("This is our Payload for create question -> ", payload);
        dispatch({
            type: CREATE_QUESTION,
            payload
        });
        setQuestion1("");
        setQuestion2("");
        alert("Question Created Successfully");

    }
    return (
        <div className="border my-5 p-5 space-y-8 rounded">
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