import React from 'react'
import { Link } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    // <div className='float-right signout-links'>
    //   <Link className='register' to='/register'>Register</Link>
    //   <Link className='login' to='/login'>Login</Link>
    //
    // </div>
    <ul className="SignedOutLinks navbar-nav ml-auto flex-nowra">
      <li className="nav-item">
        <Link className="register nav-link" to="/register">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link className="login nav-link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  )
}

export default SignedOutLinks
