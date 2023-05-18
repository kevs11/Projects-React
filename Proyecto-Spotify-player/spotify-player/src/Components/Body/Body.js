import React from 'react'
import './styles.css'
import Header from './Header'
import { useSelector } from 'react-redux';
import { selectPlaylist } from '../../features/playlistSlice';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PLRows from './PLRows';


const Body = () => { 
  const playlist = useSelector(selectPlaylist);

  
  return (
    <div className='bodyContainer'>
        <Header/>
        <div className="Info">
          <img className="imgBannerPL" src={playlist?.images[0]?.url} alt=""/>
          <div className='infoText'>
            <h4>PLAYLISTS</h4>
            <p className='details' >{playlist?.name}</p>
          </div>
        </div>
        <div className="songsList">
          <div className="bodyIcons">
            <PlayCircleFilledIcon className='playBT'/>
            <FavoriteIcon className='heartIcon' fontSize="large"/>
            <MoreHorizIcon className='moreIcon' fontSize="large"/>
          </div>
            {
              playlist?.tracks?.items.map((item, index)=> (
              <PLRows track={item.track} key={index}/>
              ))
              
            }
            
        </div>
    </div>
  )
}

export default Body