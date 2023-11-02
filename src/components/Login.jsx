import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth, provider} from "../firebase.js"
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuth}) => {
  const navigate = useNavigate()
  const loginInWithGoogle = () =>{
    //Googleでログイン
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true)
        setIsAuth(true)
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate("/")
      });
  }

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
    
  )
}

export default Login