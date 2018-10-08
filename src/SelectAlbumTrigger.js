/* eslint-env browser */
import spotify from './Spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const elementAlbumsList = document.getElementById('albums_list');
const elementAlbumInfo = document.getElementById('album-info');
const elementAlbumTracks = document.getElementById('album-tracks');

function requestAlbum(idAlbum) {
  spotify.album.getAlbum(idAlbum)
    .then(data => renderAlbumInfo(data, elementAlbumInfo))
    .then(data => renderAlbumTracks(data.tracks.items, elementAlbumTracks));
}

export default function selectAlbumTrigger() {
  elementAlbumsList.addEventListener('click', (e) => {
    const elementTarget = e.target;
    requestAlbum(elementTarget.getAttribute('data-album-id'));
  });
}
