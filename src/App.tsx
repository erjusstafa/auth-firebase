import React, { useEffect, useState } from "react";
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
import Quiz from "./components/Quiz";

function App() {
  initializeApp(firebaseConfig);
  const auth = getAuth();
  const user = useReduxSelector((state) => state.user.value);
  const isauthPerson  = useReduxSelector((state) => state.user.isAuth);


  

  const [isAuth , setIsAuth] = useState<boolean>(isauthPerson)

  const dispatch = useReduxDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(saveUser(user.refreshToken));
        setIsAuth(true)
      } else {
        dispatch(saveUser(undefined));
        setIsAuth(false)
      }
    });
  }, [auth, dispatch]);

  console.log("isAuth", isAuth);


  return (
    <div className="App">
      <Router>
    
      <Header  auth={auth}  signOut={signOut}  isAuth={isAuth}/>

        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/quiz">
            <Quiz />
          </Route>
          <Route exact path="/reset">
            <Reset />
          </Route>
          <ProtectedRoute exact path="/protected" component={Secret} />
          <ProtectedRoute exact path="/" component={Home} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
