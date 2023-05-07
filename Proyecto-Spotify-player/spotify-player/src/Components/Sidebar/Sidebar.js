import React from 'react'
import './styles.css'
import HomeIcon from '@mui/icons-material/Home';
import SidebarOptions from './SidebarOptions';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const Sidebar = () => {
  return (
    <div className= "SidebarContainer">
        <img  className="sbImage" src='https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg' alt="logo"/>
        <SidebarOptions className="sbOptions" title="Home" Icon={HomeIcon}/>
        <SidebarOptions className="sbOptions" title="Search" Icon={SearchIcon}/>
        <SidebarOptions className="sbOptions" title="Your Library" Icon={LibraryMusicIcon}/>
        <hr className='sbLine'/>
        <div className="Playlist">PLAYLISTS</div>
        <hr className='sbLine'/>
        <SidebarOptions className="sbOptions" title="My Music"/>
        <SidebarOptions className="sbOptions" title="Chillout Music"/>
    </div>
  )
}

export default Sidebar