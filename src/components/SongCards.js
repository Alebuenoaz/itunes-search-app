import React from 'react'
import SongCard from './SongCard'

const data = [
    {"wrapperType":"track", "kind":"song", "artistId":49252346, "collectionId":1308513559, "trackId":1308517161, "artistName":"Wisin", "collectionName":"Victory", "trackName":"Escápate Conmigo (feat. Ozuna, Bad Bunny, De La Ghetto, Arcángel, Noriel & Almighty)", "collectionCensoredName":"Victory", "trackCensoredName":"Escápate Conmigo (feat. Ozuna, Bad Bunny, De La Ghetto, Arcángel, Noriel & Almighty) [Remix]", "artistViewUrl":"https://music.apple.com/us/artist/wisin/49252346?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/esc%C3%A1pate-conmigo-feat-ozuna-bad-bunny-la-ghetto-arc%C3%A1ngel/1308513559?i=1308517161&uo=4", "trackViewUrl":"https://music.apple.com/us/album/esc%C3%A1pate-conmigo-feat-ozuna-bad-bunny-la-ghetto-arc%C3%A1ngel/1308513559?i=1308517161&uo=4", 
    "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/53/de/50/53de501b-1da2-c6ca-6572-8f8721bee03c/mzaf_7187202288878206136.plus.aac.p.m4a", "artworkUrl30":"https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/cf/dd/63/cfdd638e-54df-2b57-927b-7ace337ec9f7/source/30x30bb.jpg", "artworkUrl60":"https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/cf/dd/63/cfdd638e-54df-2b57-927b-7ace337ec9f7/source/60x60bb.jpg", "artworkUrl100":"https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/cf/dd/63/cfdd638e-54df-2b57-927b-7ace337ec9f7/source/100x100bb.jpg", "collectionPrice":9.99, "trackPrice":1.29, "releaseDate":"2017-07-07T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":14, "trackNumber":16, "trackTimeMillis":385520, "country":"USA", "currency":"USD", "primaryGenreName":"Urbano latino", "isStreamable":true}, 
    {"wrapperType":"track", "kind":"song", "artistId":25514958, "collectionId":1376379475, "trackId":1376379642, "artistName":"Daddy Yankee", "collectionName":"Dura (Remix) [feat. Natti Natasha, Becky G. & Bad Bunny] - Single", "trackName":"Dura (feat. Natti Natasha, Becky G. & Bad Bunny)", "collectionCensoredName":"Dura (Remix) [feat. Natti Natasha, Becky G. & Bad Bunny] - Single", "trackCensoredName":"Dura (feat. Natti Natasha, Becky G. & Bad Bunny) [Remix]", "artistViewUrl":"https://music.apple.com/us/artist/daddy-yankee/25514958?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/dura-feat-natti-natasha-becky-g-bad-bunny-remix/1376379475?i=1376379642&uo=4", "trackViewUrl":"https://music.apple.com/us/album/dura-feat-natti-natasha-becky-g-bad-bunny-remix/1376379475?i=1376379642&uo=4", 
    "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/21/dc/67/21dc6782-cef4-ab2d-666b-f7e0cea78a36/mzaf_3758112904121998679.plus.aac.p.m4a", "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/74/c1/a1/74c1a137-fd38-7b3f-b921-0e9aab3f178f/source/30x30bb.jpg", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/74/c1/a1/74c1a137-fd38-7b3f-b921-0e9aab3f178f/source/60x60bb.jpg", "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/74/c1/a1/74c1a137-fd38-7b3f-b921-0e9aab3f178f/source/100x100bb.jpg", "collectionPrice":1.29, "trackPrice":1.29, "releaseDate":"2018-04-27T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":1, "trackNumber":1, "trackTimeMillis":241760, "country":"USA", "currency":"USD", "primaryGenreName":"Urbano latino", "isStreamable":true}, 
    {"wrapperType":"track", "kind":"song", "artistId":1402425764, "collectionId":1414176528, "trackId":1414176535, "artistName":"DJ BAD BXNNY", "collectionName":"Bad Bunny (Loucii Club Edit) - Single", "trackName":"Bad Bunny", "collectionCensoredName":"Bad Bunny (Loucii Club Edit) - Single", "trackCensoredName":"Bad Bunny (Loucii Club Edit)", "artistViewUrl":"https://music.apple.com/us/artist/dj-bad-bxnny/1402425764?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/bad-bunny-loucii-club-edit/1414176528?i=1414176535&uo=4", "trackViewUrl":"https://music.apple.com/us/album/bad-bunny-loucii-club-edit/1414176528?i=1414176535&uo=4", 
    "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/76/45/fc/7645fc49-ff71-2918-8e73-caf95bd0efc4/mzaf_15949629430151834386.plus.aac.p.m4a", "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/73/d9/e3/73d9e372-cd7a-4e68-dc1d-f98d44c6bffb/source/30x30bb.jpg", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/73/d9/e3/73d9e372-cd7a-4e68-dc1d-f98d44c6bffb/source/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/73/d9/e3/73d9e372-cd7a-4e68-dc1d-f98d44c6bffb/source/100x100bb.jpg", "collectionPrice":0.99, "trackPrice":0.99, "releaseDate":"2018-08-06T12:00:00Z", "collectionExplicitness":"explicit", "trackExplicitness":"explicit", "discCount":1, "discNumber":1, "trackCount":1, "trackNumber":1, "trackTimeMillis":277500, "country":"USA", "currency":"USD", "primaryGenreName":"House", "contentAdvisoryRating":"Explicit", "isStreamable":true}, 
    {"wrapperType":"track", "kind":"song", "artistId":956078923, "collectionId":1368156323, "trackId":1368157211, "artistName":"Cardi B, Bad Bunny & J Balvin", "collectionName":"Invasion of Privacy", "trackName":"I Like It", "collectionCensoredName":"Invasion of Privacy", "trackCensoredName":"I Like It", "collectionArtistName":"Cardi B", "artistViewUrl":"https://music.apple.com/us/artist/cardi-b/956078923?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/i-like-it/1368156323?i=1368157211&uo=4", "trackViewUrl":"https://music.apple.com/us/album/i-like-it/1368156323?i=1368157211&uo=4", 
    "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/87/b1/ad/87b1ad48-2fb4-f98c-7302-96bca06bca11/mzaf_5977037403936503152.plus.aac.p.m4a", "artworkUrl30":"https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/4f/80/bb/4f80bb02-8364-832e-5241-446301cb0888/source/30x30bb.jpg", "artworkUrl60":"https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/4f/80/bb/4f80bb02-8364-832e-5241-446301cb0888/source/60x60bb.jpg", "artworkUrl100":"https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/4f/80/bb/4f80bb02-8364-832e-5241-446301cb0888/source/100x100bb.jpg", "collectionPrice":6.99, "trackPrice":1.29, "releaseDate":"2018-04-06T12:00:00Z", "collectionExplicitness":"explicit", "trackExplicitness":"explicit", "discCount":1, "discNumber":1, "trackCount":13, "trackNumber":7, "trackTimeMillis":253390, "country":"USA", "currency":"USD", "primaryGenreName":"Hip-Hop/Rap", "contentAdvisoryRating":"Explicit", "isStreamable":true}, 
]

function SongCards() {
    return (
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
    )
}

export default SongCards
