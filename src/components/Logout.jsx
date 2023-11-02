import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import {auth, provider} from "../firebase.js"
import { useNavigate } from 'react-router-dom';

const Logout = ({setIsAuth}) => {
  const navigate = useNavigate()
  const logout = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      localStorage.clear()
      setIsAuth(false)
      navigate("/login")
    })
      };
  

  return (
    <div>
      <p>ログインアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
    
  )
}

export default Logout