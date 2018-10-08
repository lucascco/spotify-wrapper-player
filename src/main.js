/* eslint-env browser */
import spotify from './Spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';
import searchTrigger from './SearchTrigger';

searchTrigger();

const albumInfo = spotify.album.getAlbum('6peEdPVO73WtgGah5sEhX4');
const elementAlbumInfo = document.getElementById('album-info');
const elementAlbumTracks = document.getElementById('album-tracks');

albumInfo.then(data => renderAlbumInfo(data, elementAlbumInfo))
  .then(data => renderAlbumTracks(data.tracks.items, elementAlbumTracks));
