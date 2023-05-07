import React from 'react'
import "./styles.css"
import {  loginUrl } from '../../SpotifyLogic'


 const Login = () => {

  return (
   <div className="loginContainer">
     <img className="logoImage" src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt='Logo' />
      <a className='loginButton' href={loginUrl}>Login with Spotify</a>  
   </div>
  )
}
export default Login
