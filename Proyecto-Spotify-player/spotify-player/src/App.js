import { useEffect,  } from 'react';
import './App.css';
import Player from './Components/Player/player';
import Login from './Components/login/login';
import { getTokenFromURL } from './SpotifyLogic';
import { useDispatch, useSelector } from 'react-redux';
import { SET_USER,  } from './features/userSlice';
import SpotifywebApi from 'spotify-web-api-js';
import { SET_TOKEN, selectToken } from './features/tokenSlice';
import { SET_PLAYLIST,  } from './features/playlistSlice';
import { SET_USERPLAYLISTS,  } from './features/userPlaylists';



const spotify = new SpotifywebApi();

function App() {
  const token = useSelector(selectToken)
  const dispatch = useDispatch()
  const plist = "3RKWf9LdRdngA9NaXlzuNA"

  useEffect(() => {
    const direcurl = getTokenFromURL();
    const _token = direcurl.access_token;

    if (_token){
      dispatch(SET_TOKEN(_token))
      spotify.setAccessToken(_token);
      spotify.getMe().then(user=>dispatch(SET_USER(user)))
      console.log("token => ", token)
      spotify.getUserPlaylists("22h7lzzyy537ojeesusmdtggq").then(userplaylists=>dispatch(SET_USERPLAYLISTS(userplaylists)))
      spotify.getPlaylist(plist).then(playlist =>dispatch(SET_PLAYLIST(playlist)))
    }


  },[token, dispatch])


  return (

   
   
    <div>
      {
          token? <Player/>:<Login/>
   
      }
    </div>
  );
}

export default App;
