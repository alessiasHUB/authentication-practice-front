import axios from "axios";
import React, { useState } from "react";
import { auth } from "./congifureFirebase";
import { googleAuthProvider } from "./congifureFirebase";
import { signInWithPopup, UserCredential } from "firebase/auth";

export function AuthDemoStart(): JSX.Element {
  const [lastAPIReply, setLastAPIReply] = useState<string>("");
  const [loggedInUser, setLoggedInUser] = useState<UserCredential | undefined>(
    undefined
  );

  async function handleFetchTimeClicked() {
    const reply = await axios.get("http://localhost:4000/");
    setLastAPIReply(reply.data);
  }

  async function handleFetchWisdomClicked() {
    //This SHOULD be hard to get, eventually.
    const reply = await axios.get("http://localhost:4000/wisdom");
    setLastAPIReply(reply.data);
  }

  return (
    <div>
      <h2>Auth Demo</h2>
      <pre>{JSON.stringify(loggedInUser, null, 2)}</pre>
      {loggedInUser?.user.photoURL && (
        <img src={loggedInUser.user.photoURL} alt="" />
      )}
      {loggedInUser && <p>{loggedInUser.user.displayName}</p>}
      <button
        onClick={async () =>
          setLoggedInUser(await signInWithPopup(auth, googleAuthProvider))
        }
      >
        Sign in
      </button>
      <button
        onClick={async () => {
          await auth.signOut();
          setLoggedInUser(undefined);
        }}
      >
        Sign out
      </button>

      <hr />
      <h3>Talk to the API</h3>
      <button onClick={handleFetchTimeClicked}>Fetch Time</button>
      <button onClick={handleFetchWisdomClicked}>Fetch Ancient Wisdom!</button>
      <h4>Last successful reply from API</h4>
      <div>{lastAPIReply}</div>
      <br />
      <i>(also check console for any failures)</i>

      <hr />
    </div>
  );
}
