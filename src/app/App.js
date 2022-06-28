import Body from "./Body";
import Header from "./header";
import authentication from "../services/authentication";
import React, { useEffect, useState } from 'react';
import { SESSION_EVENT } from "../constants";
import { useDispatch } from "react-redux";
import { GET_DATA, LOGIN_USER } from '../redux/reducers/actions';

function App() {

  const dispatch = useDispatch();
  const [ isAuthenticated , setIsAuthenticated] = useState(authentication.isLoggedin());

  if (isAuthenticated) {
    dispatch({
      type: LOGIN_USER,
      payload: authentication.getToken()
    })
  }
  
  useEffect(() => {
    dispatch({type: GET_DATA});

    window.addEventListener(SESSION_EVENT , () => {
      setIsAuthenticated(authentication.isLoggedin());
    });
    
    return () => { window.removeEventListener(SESSION_EVENT, () => {}); }
  });

  return (
    <div className="App md:mx-auto font-sans">
      {/* Navigation Bar workings*/}
      {isAuthenticated &&
        <Header/>
      }
      {/* Body Contet Goes Here*/}
      <Body isAuthenticated={isAuthenticated}/>
      {/* Footer Goes here */}
    </div>
  );
}

export default App;
