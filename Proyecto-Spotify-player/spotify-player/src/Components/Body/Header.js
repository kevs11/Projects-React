import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

import './styles.css'
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';


const Header = () => {
  const user = useSelector(selectUser)
  return (
    <div className='headerContainer'>
        <div className="Headerleft">
            {/*<TrackSearchResult/>*/}
            <SearchIcon/>
            <input className='inptBuscar' type="text" placeholder='Search for Artist, Song or Other' />
        </div>
        <div className="HeaderRight">
            <Avatar src={user?.images[0]?.url} alt={user?.id}/>
            <h4 className='avatarName'>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header