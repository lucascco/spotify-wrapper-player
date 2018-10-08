/* eslint-env browser */
import spotify from './Spotify';
import renderAlbum from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';


const albums = spotify.search.albums('Incubus');
const elementAlbums = document.getElementById('albums_list');

const albumInfo = spotify.album.getAlbum('6peEdPVO73WtgGah5sEhX4');
const elementAlbumInfo = document.getElementById('album-info');
const elementAlbumTracks = document.getElementById('album-tracks');

albumInfo.then(data => renderAlbumInfo(data, elementAlbumInfo))
  .then(data => renderAlbumTracks(data.tracks.items, elementAlbumTracks));

albums.then(data => renderAlbum(data.albums.items, elementAlbums));
