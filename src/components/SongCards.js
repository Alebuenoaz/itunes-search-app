import React, { useEffect, useState } from 'react'
import SongCard from './SongCard'

function SongCards() {
    const [tracks, setTracks] = useState({
        data: [],
        load: true,
        search: "",
        error: "",
    })

    const getContent = async () => {
        try{
            const url = new URL('http://itunes.apple.com/search')
            const params = { term: 'Hotel California', media: 'music'}
            url.search = new URLSearchParams(params)
            const res = await fetch(url, {method: 'POST'})
            const data = await res.json();
            console.log(data.results);
            setTracks({
                data: data.results,
                load: false,
                search: "",
                error: ""
            })
        }
        catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        getContent();
      }, []);

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (tracks.search === "") {
        return setTracks({ ...tracks, error: "Please write a valid text" });
    }

    const url = new URL('http://itunes.apple.com/search')
    const params = { term: tracks.search, media: 'music'}
    url.search = new URLSearchParams(params)
    const res = await fetch(url, {method: 'POST'})
    const data = await res.json();
    console.log(data.results);

    if (!data.results || data.results.length === 0) {
        return setTracks({ ...tracks, error: "There are no results." });
    }

    return setTracks({
        data: data.results,
        load: false,
        search: "",
        error: "",
    });
    };

    const { data, load } = tracks;

    if (load) {
        return <div className="container d-flex justify-content-center align-items-center"><h1>Loading...</h1></div>;
    }

    return (
        <div>
        <div className="row">
            <div className="col-md-4 offset-md-4 p-4">
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                className="form-control"
                placeholder="Search for a Song"
                onChange={(e) => setTracks({...tracks, search: e.target.value })}
                value={tracks.search}
                autoFocus
                />
            </form>
            <p className="text-white">{tracks.error ? tracks.error : ""}</p>
            </div>
        </div>
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="row">
                {
                    data !== undefined ?
                    data.map(card => (
                        <div className="col-md-3" key={card.trackId}>
                            <SongCard
                            artistName={card.artistName}
                            imgCover={card.artworkUrl100 !== undefined ? card.artworkUrl100.replace("100x100", "304x304") : undefined}
                            songName={card.trackName}
                            album={card.collectionName}
                            price={card.trackPrice}
                            releaseDate={card.releaseDate}
                            audio={card.previewUrl}
                            />
                        </div>
                    ))
                    : null
                }
            </div>
        </div>
    </div>
    )
}

export default SongCards
