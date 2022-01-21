import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { ChangeEvent, ReactElement, useState } from 'react';

function Reset():ReactElement {
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
    <div>
      <h1>Reset password</h1>
      Email:
      <br />
      <input
        type="text"
        value={email}
        onChange={(e : ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      <br />
      <button onClick={handleReset}>Reset password</button>
    </div>
  );
}

export default Reset;
