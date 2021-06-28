import { render } from '@testing-library/react';
import SongCard from "./SongCard";

test("Render a Card Correctly", () => {
    const card = {
        "artistId":49252346, "collectionId":1308513559, "trackId":1308517161, "artistName":"Wisin", "collectionName":"Victory", "trackName":"Escápate Conmigo (feat. Ozuna, Bad Bunny, De La Ghetto, Arcángel, Noriel & Almighty)", "collectionCensoredName":"Victory", "trackCensoredName":"Escápate Conmigo (feat. Ozuna, Bad Bunny, De La Ghetto, Arcángel, Noriel & Almighty) [Remix]", "artistViewUrl":"https://music.apple.com/us/artist/wisin/49252346?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/esc%C3%A1pate-conmigo-feat-ozuna-bad-bunny-la-ghetto-arc%C3%A1ngel/1308513559?i=1308517161&uo=4", "trackViewUrl":"https://music.apple.com/us/album/esc%C3%A1pate-conmigo-feat-ozuna-bad-bunny-la-ghetto-arc%C3%A1ngel/1308513559?i=1308517161&uo=4", 
    "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/53/de/50/53de501b-1da2-c6ca-6572-8f8721bee03c/mzaf_7187202288878206136.plus.aac.p.m4a", "artworkUrl30":"https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/cf/dd/63/cfdd638e-54df-2b57-927b-7ace337ec9f7/source/30x30bb.jpg", "artworkUrl60":"https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/cf/dd/63/cfdd638e-54df-2b57-927b-7ace337ec9f7/source/60x60bb.jpg", "artworkUrl100":"https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/cf/dd/63/cfdd638e-54df-2b57-927b-7ace337ec9f7/source/100x100bb.jpg", "collectionPrice":9.99, "trackPrice":1.29, "releaseDate":"2017-07-07T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":14, "trackNumber":16, "trackTimeMillis":385520, "country":"USA", "currency":"USD", "primaryGenreName":"Urbano latino", "isStreamable":true
    }

    const component = render(<SongCard
        artistName={card.artistName}
        imgCover={card.artworkUrl100 !== undefined ? card.artworkUrl100.replace("100x100", "304x304") : undefined}
        songName={card.trackName}
        album={card.collectionName}
        price={card.trackPrice}
        releaseDate={card.releaseDate}
        audio={card.previewUrl}
        />)
    component.getByText('Escápate Conmigo (feat. Ozuna, Bad Bunny, De La Ghetto, Arcángel, Noriel & Almighty)')
    component.getByText('Artist: Wisin')
    component.getByText('Album: Victory')
    component.getByText('Release Date: 2017-07-07')
    component.getByText('Price: 1.29$')
})