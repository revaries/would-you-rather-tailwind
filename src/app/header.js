import HeaderItem from "./headerItem";
import { Link } from "react-router-dom";
import authentication from "../services/authentication";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ProfilePicture from "./ProfilePicture";

function Header() {
  const dispatch = useDispatch();
  const authenticatedUser = useSelector((state) => state.authentication);
  const loggedInUser = useSelector((state) => state.users[authenticatedUser.loggedInUser]);
  const loggedInUserName = loggedInUser ? loggedInUser.name : "";
  const loggedInUserAvatar = loggedInUser ? loggedInUser.avatarURL : "";
  return (
    <div className="mx-auto w-full mb-3 space-x-16 bg-indigo-900 text-white shadow-2xl">
      <div className="flex flex-col sm:flex-row w-full sm:w-4/5 sm:justify-start sm:ml-32">
        <Link to="/feed">
          <HeaderItem name={"Home"} />
        </Link>
        <Link to="/add">
          <HeaderItem name={"New Question"} />
        </Link>
        <Link to="/leaderBoard">
          <HeaderItem name={"LeaderBord"} />
        </Link>
        <div className="sm:ml-auto flex flex-row">
            <p className="p-5 text-center">Hello {loggedInUserName}</p>
            <ProfilePicture avatarURL={loggedInUserAvatar} isSmall={true}/>
          <div
            className=""
            onClick={() => {
              dispatch({
                type: "LOGOUT_USER",
              });
              authentication.logout();
            }}
          >
            <HeaderItem name={"Logout"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
