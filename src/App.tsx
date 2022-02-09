import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import Home from "./pages/protected/Home/Home";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./configs/firebaseConfig";
import { getAuth, signOut, onAuthStateChanged, User } from "firebase/auth";
import { useReduxDispatch, useReduxSelector } from "./redux/hooks";
import { saveUser } from "./redux/actions/authSlice";
import ProtectedRoute from "./utils/ProtectedRoute";
import Quiz from "./pages/protected/Quiz";
import Header from "./components/Header";
import MovieDetails from "./components/MovieDetails";
import "./App.scss";
import Table from "./components/Table";

function App() {
  initializeApp(firebaseConfig);
  const auth = getAuth();
  const user = useReduxSelector((state) => state.user.value);
  const isauthPerson = useReduxSelector((state) => state.user.isAuth);

  const [isAuth, setIsAuth] = useState<boolean>(isauthPerson);

  const dispatch = useReduxDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        dispatch(saveUser(user.refreshToken));
        setIsAuth(true);
      } else {
        dispatch(saveUser(undefined));
        setIsAuth(false);
      }
    });
  }, [auth, dispatch]);

  console.log("isAuth", isAuth);

  return (
    <div className="App">
      <Router>
        <Header auth={auth} signOut={signOut} isAuth={isAuth} />
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/quiz" component={Quiz} />
          <ProtectedRoute exact path="/movie/:id" component={MovieDetails} />
          <ProtectedRoute exact path="/table" component={Table} />

          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/reset">
            <Reset />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
