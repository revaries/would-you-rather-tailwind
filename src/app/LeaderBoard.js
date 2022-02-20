import ProfilePicture from './ProfilePicture';
import FeedScoreCard from './FeedScoreCard';


function LeaderBoard() {


    return (
        <div className="">
            {/* List of stuff */}
 
            <div className="flex sm:flex-row flex-col p-5 rounded border mx-auto sm:space-x-28">
                <ProfilePicture className="my-auto flex-none"></ProfilePicture>
                <div className="my-auto flex-grow space-y-8">
                    <h1 className="text-xl">Revanth Penugonda</h1>
                    <div className="space-y-3">
                        <div id="questions-card" className="flex flex-row justify-between">
                            <p>Unanswered Questions</p>
                            <p>10</p>
                        </div>
                        <hr />
                        <div id="questions-card" className="flex flex-row justify-between">
                            <p>Answered Questions</p>
                            <p>10</p>
                        </div>
                    </div>
                </div>
                <FeedScoreCard className="my-auto flex-none"></FeedScoreCard>
            </div>
        </div>
    )
}

export default LeaderBoard;