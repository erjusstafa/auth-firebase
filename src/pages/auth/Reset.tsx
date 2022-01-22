import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { ChangeEvent, ReactElement, useState } from "react";

function Reset(): ReactElement {
  const [email, setEmail] = useState<string>("");
  const auth = getAuth();

  const handleReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("An error has occured: ", errorCode, errorMessage);
      });
  };
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" onSubmit={handleReset} className="sign-in-form">
            <h2 className="title">Reset</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </div>
            <button id="butt">Reset</button>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Reset
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Reset;
