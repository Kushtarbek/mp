import React from 'react'
import s from './Feed.module.css'
import MyPosts from './../MyPosts/MyPosts'

const Feed = () => {
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlU8V9gP8YGrPOMrRQgjXH03iqu2j1OTzSqw&usqp=CAU"></img>
      <div>
        <img
          alt=""
          src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"
        ></img>
      </div>
      <form>
        <div className="item">ava+ desc</div>

        <div className="posts">
          <MyPosts message="inside myposts" />
        </div>
      </form>
    </div>
  )
}

export default Feed
