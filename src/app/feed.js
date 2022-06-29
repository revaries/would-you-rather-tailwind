import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Question from './question';

function Feed() {
    const UNANSWERED = "Unanswered";
    const ANSWERED = "Ansered"
    const [feedSelction, setfeedSelction] = useState(UNANSWERED);

    const questions = useSelector(state => state.questions);
    const signedInUser = useSelector(state => state.authentication.loggedInUser);
    const users = useSelector(state => state.users);
    let questionsToDisplay = [];
    
    
    if(Object.keys(questions).length > 0) {
        const usersAnsweredQuestions = Object.keys(users[signedInUser]?.answers);
        const questionKeys = Object.keys(questions);
        questionsToDisplay = feedSelction === UNANSWERED 
        ? questionKeys.filter(questionKey => !usersAnsweredQuestions.includes(questionKey)) 
        : questionKeys.filter(questionKey => usersAnsweredQuestions.includes(questionKey));
    }

    function feedSelect(selection) {
        setfeedSelction(selection);
    }

    return (
        <div className="">
            {/* Feed Selection */}
            <div className="flex flex-row text-white text-center py-3">
                <div
                    className = {`w-1/2 border-black font-semibold py-3 hover:font-bold rounded-l-3xl tracking-wide ml-8 ${feedSelction === UNANSWERED ? 'bg-indigo-800' : 'bg-indigo-500' }`}
                    onClick = {() => feedSelect(UNANSWERED)}
                    id={UNANSWERED}>
                    Unanswered Questions
                </div>
                <div
                    className={`w-1/2 border-black font-semibold py-3 hover:font-bold rounded-r-3xl tracking-wide mr-8 ${feedSelction === ANSWERED ? 'bg-indigo-800': 'bg-indigo-500' }`}
                    id={ANSWERED}
                    onClick={() => feedSelect(ANSWERED)}>
                    Answered Questions
                            </div>
            </div>

            <div className="space-y-4">
                {/* List of stuff */}
                {
                    questionsToDisplay.map(key => <Question key={key} question={questions[key]} isPollable={feedSelction===UNANSWERED}></Question>)
                }
            </div>

        </div>
    )
}

export default Feed;