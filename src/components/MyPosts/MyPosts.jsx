import React from 'react'
import Post from './Post'
import s from './MyPosts.module.css'

const MyPosts = (props) => {
  return (
    <div>
      
      <div>
        <button> add post</button>
      </div>
      
      <div>
        <p>
          {'this is from'}
          {props.message}
        </p>
        <Post message="Greetings 1" count="142" />
      
        <Post message="Salam aleikum " count="122" />
      </div>
    </div>
  )
}

export default MyPosts
