import React from 'react'
import "./styles.css";

 const PLRows = ({track}) => {
  return (
    <div className='songRowContainer'>
        <img className='trackImgs' src={track.album.images[0].url} alt="Album"/>
        <div className='songInfo'>
            <h4>{track.name}</h4>
            <p>{
            track.artists.map(artist => artist.name) + " , " + track.album.name
            }

            </p>
        </div>
    </div>
  )
}
export default PLRows;
