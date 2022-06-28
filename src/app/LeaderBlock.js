import ProfilePicture from './ProfilePicture';
import FeedScoreCard from './FeedScoreCard';

function LeaderBlock({ user }) {
    const { name, questions, answers, avatarURL } = user;
    const totalScore = questions.length + Object.keys(answers).length;

    return (
        <div className="flex sm:flex-row flex-col p-5 rounded border mx-auto sm:space-x-28">
                <ProfilePicture className="my-auto flex-none" avatarURL={avatarURL}></ProfilePicture>
                <div className="my-auto flex-grow space-y-8">
                    <h1 className="text-xl">{ name }</h1>
                    <div className="space-y-3">
                        <div id="questions-card" className="flex flex-row justify-between">
                            <p>Created Questions</p>
                            <p>{user.questions.length}</p>
                        </div>
                        <hr />
                        <div id="questions-card" className="flex flex-row justify-between">
                            <p>Answered Questions</p>
                            <p>{Object.keys(user.answers).length}</p>
                        </div>
                    </div>
                </div>
                <FeedScoreCard className="my-auto flex-none" score={totalScore}></FeedScoreCard>
            </div>
    )
}

export default LeaderBlock;