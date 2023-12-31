import React, { useState } from 'react'
import "./CreatePost.css"
import { collection, addDoc } from "firebase/firestore"; 
import { db, auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState()
  const [postText, setPostText] = useState()
  const navigate = useNavigate()

  const createPost = async() => {
    
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "posts"), {
      title: "title",
      postText: "postText",
      author: { 
        username : auth.currentUser.displayName,
        id : auth.currentUser.uid
      }

    });
    navigate("/")
  }

  return (


    <div className='createPostPage'>
      <div className="postContainer">
        <h1>記事を投稿する</h1>
        <div>タイトル</div>
        <input type="text" placeholder='タイトルを記入' 
          onChange={(e)=>setTitle(e.target.value)}
           />
        <div>投稿</div>
        <textarea placeholder='投稿内容を記入' 
          onChange={(e)=>setPostText(e.target.value)}/>        
        <button className="postButton" onClick={createPost}>投稿する</button>
      </div>
    </div>
  )
}

export default CreatePost