import { Redirect, Route } from "react-router-dom";
import authenticationService from "../services/authentication";

function AuthenticatedRoute({children, ...rest}) {
    return (
        authenticationService.isLoggedin() 
        ? (<Route {...rest}>
             {children}
            </Route>) 
        : (<Redirect to="/login"></Redirect>)
    )   
}

export default AuthenticatedRoute;