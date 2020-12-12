import React from 'react'
import s from './MyPosts.module.css'

const Post = (props) => {
  return (
    <div>
      <div>{props.message}</div>
      <div>
        <span>Likes{props.count} </span>
      </div>
    </div>
  )
}

export default Post
