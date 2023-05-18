import React from 'react';
import "./styles.css";

const SongRow = ({items, img}) => {
  return (
    <div className='songRowContainer'>
        <img className='trackImgs' src={img} alt='Playlists'/>
        <div className='songInfo'>
            <h4>{items}</h4>

        </div>
    </div>
  )
}

export default SongRow