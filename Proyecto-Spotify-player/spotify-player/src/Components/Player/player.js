import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import "./styles.css";

const Player = () => {
  return (
    <>
    <div className="SpotifyBody">
      <Sidebar/>
      <Body/>
    </div>
    <Footer/>
    </>
  )
}

export default Player