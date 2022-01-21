import React, { ChangeEvent, ReactElement, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function Register() :ReactElement {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const auth = getAuth();

  const handleRegister  = () => {
    //here will go code for sign in
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Registered user: ", user);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error ocured: ", errorCode, errorMessage);
      });
  };
  return (<div>
  <h1>Register</h1>
  Email:
  <br />
  <input
    type="text"
    value={email}
    onChange={(e  : ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
  />
  <br />
  Password:
  <br />
  <input
    type="password"
    value={password}
    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
  />
  <br />
  <button onClick={handleRegister }>Log In</button>
</div>
);
}

export default Register;