import Body from "./Body";
import Header from "./header";
import authentication from "../services/authentication";
import React, { useEffect, useState } from 'react';
import { SESSION_EVENT } from "../constants";

function App() {
  const [ isAuthenticated , setIsAuthenticated] = useState(authentication.isLoggedin());
  useEffect(() => {

    window.addEventListener(SESSION_EVENT , () => {
      setIsAuthenticated(authentication.isLoggedin());
    });
    
    return () => { window.removeEventListener(SESSION_EVENT, () => {}); }
  }, []);

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
