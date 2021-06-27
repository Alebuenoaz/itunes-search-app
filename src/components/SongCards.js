import React from 'react'
import SongCard from './SongCard'


function SongCards() {
    return (
            <div className="container d-flex justify-content-center h-100 align-items-center">
                <div className="row">
                    <div className="col-md-3"><SongCard/></div>
                    <div className="col-md-3"><SongCard/></div>
                    <div className="col-md-3"><SongCard/></div>
                    <div className="col-md-3"><SongCard/></div>
                </div>
            </div>
    )
}

export default SongCards
