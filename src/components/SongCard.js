import React from 'react'

function SongCard() {

    return (
        <div className="card text-center bg-dark">
            <div className="card-body text-light">
                <h4 className="card-title">Song Name</h4>
                <p className="card-text text-secondary">Artist: artistName</p>
                <p className="card-text text-secondary">Album: album</p>
                <p className="card-text text-secondary">Release Date: releaseDate</p>
                <p className="card-text text-secondary">Price: price$</p>
                <a href="#!" className="btn btn-outline-secondary rounded-0">Play this Track</a>
            </div>
        </div>
    )
}

export default SongCard
