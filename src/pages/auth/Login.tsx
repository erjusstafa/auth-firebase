import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { ChangeEvent, ReactElement, useState } from 'react';

function Login() :ReactElement {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const auth = getAuth();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Singed in user: ", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("An error occured: ", errorCode, errorMessage);
    });
  };
  return (<div>
  <h1>Login</h1>
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
  <button onClick={handleLogin}>Log In</button>
</div>
);
}

export default Login;
