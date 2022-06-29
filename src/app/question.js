import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfilePicture from "./ProfilePicture";
import ProgressBar from "./ProgressBar";

function Question({ question, isPollable }) {
  const { id, author, optionOne, optionTwo } = question;
  const user = useSelector((state) => state.users[author]);
  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  return (
    <div className="border rounded-md" id={id}>
      <div className="p-4 bg-gray-300 h-10 text-left my-auto leading-7 font-sans font-light align-middle">
        <div className="">
          {user.name} asks..
        </div>
      </div>
      <div className="flex sm:flex-row flex-col p-5 mx-auto sm:space-x-14 ">
        <ProfilePicture
          className="my-auto flex-none"
          avatarURL={user.avatarURL}
        />
        <div className="flex-1 flex flex-col justify-evenly overflow-hidden space-y-3">
          <div className="space-y-3">
            <div className="py-3 border-2 px-5 rounded-md border-indigo-200">
              {optionOne.text}
            </div>
            <ProgressBar votes={optionOne.votes.length} totalVotes={totalVotes}/>
          </div>
          <div className="space-y-3">
            <div className="py-3 border-2 px-5 rounded-md border-indigo-200">
              {optionTwo.text}
            </div>
            <ProgressBar votes={optionTwo.votes.length} totalVotes={totalVotes}/>
          </div>
          { isPollable &&
          <div className="flex justify-center">
             <Link className="mt-4 p-2 w-3/4 bg-indigo-400 font-sans font-normal center leading-4 text-white text-center border-2 rounded-md" to={`/questions/${id}`}>
                View Poll
              </Link>
          </div>
          }
        </div>
      </div> 
    </div>
  );
}

export default Question;
