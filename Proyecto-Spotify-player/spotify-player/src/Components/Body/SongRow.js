import React from 'react';
import "./styles.css";

const SongRow = ({track}) => {
  return (
    <div className='songRowContainer'>
        <img className='trackImgs' src={track.album.images[0].url} alt='album'/>
        <div className='songInfo'>
            <h4>{track.name}</h4>
            <p>{
                track.artists.map(artist => artist.name).join(" , ")    
            }
            {
                track.album.name
            }
        </p>
        </div>
    </div>
  )
}

export default SongRow