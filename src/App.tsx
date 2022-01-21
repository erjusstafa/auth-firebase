import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import Secret from "./pages/protected/Secret";
import Home from "./pages/Home";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./configs/firebaseConfig";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useReduxDispatch, useReduxSelector } from "./redux/hooks";
import { saveUser } from "./redux/actions/authSlice";
import ProtectedRoute from "./utils/ProtectedRoute";
import Header from "./components/Header";
import Data from "./Todo";

function App() {
  initializeApp(firebaseConfig);
  const auth = getAuth();
  const user = useReduxSelector((state) => state.user.value);
  console.log("user from state", user);
  const dispatch = useReduxDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(saveUser(user.refreshToken));
      } else {
        dispatch(saveUser(undefined));
      }
    });
  }, [auth, dispatch]);



/*   const signIn = () => {
    const a = new  firebase.auth.GoogleAuthProvider()
  } */
  return (
    <div className="App">
      <Router>
    
      <Header  auth={auth}  signOut={signOut}/>

        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/reset">
            <Reset />
          </Route>
          <ProtectedRoute exact path="/protected" component={Secret} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/data"  component={Data} />
        </Switch>
      </Router>


{/*       <button onClick={signIn}>sign</button> */}
    </div>
  );
}

export default App;
