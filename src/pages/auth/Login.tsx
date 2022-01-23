import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import React, { ChangeEvent, Fragment, ReactElement, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.scss";
function Login(): ReactElement {
  const [email, setEmail] = useState<string>("erjus.stafa@gmail.com");
  const [password, setPassword] = useState<string>("123456");
  const history = useHistory();
  const auth = getAuth();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: UserCredential) => {
        const user = userCredential.user;
        console.log("Singed in user: ", user);
        history.push("/");
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("An error occured: ", errorCode, errorMessage);
      });
  };
  return (
    <Fragment>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form
              action="#"
              onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
                event.preventDefault()
              }
              className="sign-in-form"
            >
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  placeholder="email"
                />{" "}
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  placeholder="password"
                />{" "}
              </div>
              <Link to="/" id="butt" onClick={handleLogin}>
                Log In
              </Link>
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <p className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </p>
                <p className="social-icon">
                  <i className="fab fa-twitter"></i>
                </p>
                <p className="social-icon">
                  <i className="fab fa-google"></i>
                </p>
                <p className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </p>
              </div>
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign </h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <p className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </p>
                <p className="social-icon">
                  <i className="fab fa-twitter"></i>
                </p>
                <p className="social-icon">
                  <i className="fab fa-google"></i>
                </p>
                <p className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>

              <button
                onClick={() => history.push("/register")}
                className="btn transparent"
                id="sign-up-btn"
              >
                Sign up
              </button>
            </div>
            <img src="img/log.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
