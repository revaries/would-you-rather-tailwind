import React, { useState } from 'react';


function Feed() {
    const UNANSWERED = "Unanswered";
    const ANSWERED = "Ansered"
    const [optionA, setoptionA] = useState(25);
    const [feedSelction, setfeedSelction] = useState(UNANSWERED);

    function getOptionAWidth() {
        return optionA;
    }

    function getOptionBWidth() {
        return 100 - optionA;
    }

    function feedSelect(selection) {
        setfeedSelction(selection);
    }

    return (
        <div className="">
            {/* Feed Selection */}
            <div className="flex flex-row text-white text-center py-3">
                <div
                    className = {`w-1/2 border-black font-semibold py-3 hover:font-bold rounded-l-3xl tracking-wide ml-8 ${feedSelction === UNANSWERED ? 'bg-indigo-400' : 'bg-indigo-600'}`}
                    onClick = {() => feedSelect(UNANSWERED)}
                    id={UNANSWERED}>
                    Unanswered Questions
                </div>
                <div
                    className={`w-1/2 border-black font-semibold py-3 hover:font-bold rounded-r-3xl tracking-wide mr-8 ${feedSelction === ANSWERED ? 'bg-indigo-400' : 'bg-indigo-600'}`}
                    id={ANSWERED}
                    onClick={() => feedSelect(ANSWERED)}>
                    Answered Questions
                            </div>
            </div>

            <div className="">
                {feedSelction === UNANSWERED ? (
                    <div className="">
                        This is Unanswered Section
                    </div>
                ) : (
                        <div className="">
                            <div className="flex rounded-md overflow-hidden text-white font-mono">
                                <div class="px-2 py-3 bg-indigo-400 text-center" style={{ width: `${getOptionAWidth()}%` }}>Option A - {getOptionAWidth()}%</div>
                                <div class="px-2 py-3 bg-indigo-500 text-center" style={{ width: `${getOptionBWidth()}%` }}>Option B - {getOptionBWidth()}%</div>
                            </div>
                        </div>
                )}
            </div>

        </div>
    )
}

export default Feed;