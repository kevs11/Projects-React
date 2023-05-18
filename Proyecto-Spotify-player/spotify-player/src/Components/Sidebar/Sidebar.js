import React from 'react'
import './styles.css'
import HomeIcon from '@mui/icons-material/Home';
import SidebarOptions from './SidebarOptions';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import {  useSelector } from 'react-redux';
import { selectUserPlaylist } from '../../features/userPlaylists';
import SongRow from '../Body/SongRow';





const Sidebar = () => {
  const userplaylists = useSelector(selectUserPlaylist);

  
  return (
    <div className= "SidebarContainer">
        <img  className="sbImage" src='https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg' alt="logo"/>
        <SidebarOptions className="sbOptions" title="Home" Icon={HomeIcon}/>
        <SidebarOptions className="sbOptions" title="Search" Icon={SearchIcon}/>
        <SidebarOptions className="sbOptions" title="Your Library" Icon={LibraryMusicIcon}/>
        <hr className='sbLine'/>
        <div className="Playlist">PLAYLISTS</div>
        <hr className='sbLine'/>
        {
          userplaylists?.items.map((items, index) => (
          <SongRow img ={items.images[0].url} items={items.name} key={index}/>
          ))
        }

        
    </div>

  )
}

export default Sidebar