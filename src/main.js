/* eslint-env browser */
import spotify from './Spotify';
import renderAlbum from './AlbumList';

const albums = spotify.search.albums('Incubus');
const elementAlbums = document.getElementById('albums_list');

albums.then(data => renderAlbum(data.albums.items, elementAlbums));
