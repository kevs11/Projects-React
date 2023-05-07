import { useEffect, useState } from 'react';
import './App.css';
import Player from './Components/Player/player';
import Login from './Components/login/login';
import { getTokenFromURL } from './SpotifyLogic';
import { useDispatch, useSelector } from 'react-redux';
import { SET_USER, selectUser } from './features/userSlice';
import SpotifywebApi from 'spotify-web-api-js';
import { SET_TOKEN, selectToken } from './features/tokenSlice';
import { SET_PLAYLIST } from './features/playlistSlice';


const spotify = new SpotifywebApi();

function App() {
  const token = useSelector(selectToken)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const direcurl = getTokenFromURL();
    const _token = direcurl.access_token;

    if (_token){
      dispatch(SET_TOKEN(_token))
      spotify.setAccessToken(_token);
      spotify.getMe().then(user=>dispatch(SET_USER(user)))
      console.log("token => ", token)
      spotify.getPlaylist("7f0Dnj8vQNL8QkokrrBgGl").then(playlist=>dispatch(SET_PLAYLIST(playlist)))
    }


  },[dispatch])


  return (
    <div>
      {
        user ?  <Player/>: <Login/> 
      }
    </div>
  );
}

export default App;
