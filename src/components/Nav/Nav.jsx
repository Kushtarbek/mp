/* eslint-disable jsx-a11y/anchor-is-valid */
// import './Nav.css'
import React from 'react'
import classes from './Nav.module.css'

// classes = {
//   nav: 'navbar__item',
// }

const Nav = () => {
  return (
    <nav className={classes.navbar__item}>
      <div className="item">
        {' '}
        <a href="#">Profile</a>
      </div>
      <div className="item">
        {' '}
        <a href="#">Messages</a>
      </div>
      <div className="item">
        {' '}
        <a href="#">News</a>
      </div>
      <div className="item">
        {' '}
        <a href="#">Music</a>
      </div>
      <div className="item">
        {' '}
        <a href="#">Settings</a>
      </div>
    </nav>
  )
}

export default Nav
