import { Button, inputAdornmentClasses } from '@mui/material'
import React from 'react'
import firebase from "firebase/compat/app";
import { auth } from '../firebase';

function SignIn() {
  function SignInWithGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div>
      <Button onClick={SignInWithGoogle}>
        ログイン
      </Button>
    </div>
  )
}

export default SignIn