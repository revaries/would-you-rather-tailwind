import { useSelector } from 'react-redux';
import LeaderBlock from './LeaderBlock';

function LeaderBoard() {
    const users = useSelector(state => state.users);
    const usersSorted = Object.values(users).sort((a, b) => 
        (b.questions.length + Object.keys(b.answers).length) - (a.questions.length + Object.keys(a.answers).length));

    return (
        <div className="space-y-4">
            {usersSorted.map(user => <LeaderBlock key={user.id} user={user} />)}
        </div>
    )
}

export default LeaderBoard;