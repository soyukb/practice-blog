import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className="homePage">
      <div className="postContent">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
      
      <div className="postTextConteiner">今はReact学習中です。</div>
      <div className="nameAndDeleteButton">
        <h3>@soyukoba</h3>
        <button>削除</button>
      </div>
      </div>
    </div>
  )
}

export default Home