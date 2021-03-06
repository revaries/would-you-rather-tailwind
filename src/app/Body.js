import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import LeaderBoard from './LeaderBoard.js';
import CreateQuestion from './CreateQuestion.js';
import AuthenticatedRoute from "./AuthenticatedRoute";
import LoginFom from './LoginForm.js';
import Feed from "./feed.js";
import Questions from "./questions.js";
import { useEffect } from "react";

function Body({isAuthenticated}) {
    const location = useLocation();

    useEffect(() => {
        console.log("Location Changed -> ", location);
    }, [location]);

    return (
        <div className="w-full">
            <div className={`sm:w-2/3 w-full mx-auto border-2 h-auto py-5 px-3 rounded  ${isAuthenticated ? `mt-3` : `mt-14`}`}>
                <div className="h-full w-full">
                    <div className="border-gray-50 h-auto overflow-auto">
                        <Switch>
                            <AuthenticatedRoute path="/feed">
                                <Feed></Feed>
                            </AuthenticatedRoute>
                            <AuthenticatedRoute path="/add">
                                <CreateQuestion></CreateQuestion>
                            </AuthenticatedRoute>
                            <AuthenticatedRoute path="/leaderBoard">
                                <LeaderBoard></LeaderBoard>
                            </AuthenticatedRoute>
                            <AuthenticatedRoute path="/questions/:question_id">
                                <Questions></Questions>
                            </AuthenticatedRoute>
                            <Route path="/login">
                                {isAuthenticated 
                                    ? <Redirect to="/feed"></Redirect>
                                    : <LoginFom></LoginFom>
                                }
                            </Route>
                            <AuthenticatedRoute path="/">
                                <Redirect to="/feed"></Redirect> 
                            </AuthenticatedRoute>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;