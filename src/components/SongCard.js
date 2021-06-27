import React from 'react'

function SongCard({artistName, imgCover, songName, album, price, releaseDate, audio}) {

    return (
        <div className="card text-center bg-dark">
            {imgCover !== undefined ? <img src={imgCover} alt={songName} /> : <img src="http://hosted.netro.ca/morplay/player/img/blankart.jpg" alt={songName}/>}
            <div className="card-body text-light">
                <h4 className="card-title">{songName}</h4>
                <p className="card-text text-secondary">Artist: {artistName}</p>
                <p className="card-text text-secondary">Album: {album}</p>
                <p className="card-text text-secondary">Release Date: {releaseDate.split('T')[0]}</p>
                <p className="card-text text-secondary">Price: {price}$</p>
                <a href="#!" className="btn btn-outline-secondary rounded-0">Play this Track</a>
            </div>
        </div>
    )
}

export default SongCard
