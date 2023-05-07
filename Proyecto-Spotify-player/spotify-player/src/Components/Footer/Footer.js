import React from 'react';
import './styles.css';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
//import StopIcon from '@mui/icons-material/Stop';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from '@mui/material';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

const Footer = () => {
  return (
    <div className='FooterContainer'>
      <div className='footerLeft'>
        <img className='coverImg' src='https://static.posters.cz/image/750/buque-costero/coldplay-parachutes-album-cover-i56853.jpg' alt='cover' />
        <div className='footerimgContainer'>
          <h4>Shape Of You</h4>
          <p>Ed Sheeran</p>
        </div>
      </div>
      <div className='footerCenter'>
        <ShuffleIcon className='shuffle'/>
        <SkipPreviousIcon className='icon'/>
        <PlayCircleOutlineIcon className='icon'/>
        <SkipNextIcon className='icon'/>
        <RepeatIcon className='repeat'/>
      </div>
      <div className='footerRight'>
        <Grid container spacing={2}>
          <Grid item><PlaylistPlayIcon/></Grid>
          <Grid item><VolumeDownIcon/></Grid>
          <Grid item xs><Slider/></Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer