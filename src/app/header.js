import HeaderItem from "./headerItem";
import { Link } from "react-router-dom";
import authentication from '../services/authentication';
import { useDispatch } from "react-redux";


function Header() {
    const dispatch = useDispatch();
    return (
        <div className="mx-auto w-full mb-3 space-x-16 bg-indigo-900 text-white shadow-2xl">
            <div className="flex flex-col sm:flex-row w-full sm:w-4/5 sm:justify-start sm:ml-32">
                <Link to="/feed">
                    <HeaderItem name={"Home"} />
                </Link>
                <Link to="/newQuestion">
                    <HeaderItem name={"New Question"} />
                </Link>
                <Link to="/leaderBoard">
                    <HeaderItem name={"LeaderBord"} />
                </Link>
                <div className="sm:ml-auto" 
                    onClick={() => {
                        dispatch({
                            type: "LOGOUT_USER"
                        })
                        authentication.logout()
                        }}>
                    <HeaderItem name={"Logout"}/>
                </div>
            </div>
        </div>
    )
}

export default Header;