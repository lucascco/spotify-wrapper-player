/* eslint-env browser */
import spotify from './Spotify';
import renderAlbum from './AlbumList';
import renderAlbumInfo from './AlbumInfo';


const albums = spotify.search.albums('Incubus');
const elementAlbums = document.getElementById('albums_list');

const albumInfo = spotify.album.getAlbum('6peEdPVO73WtgGah5sEhX4');
const elementAlbumInfo = document.getElementById('album-info');


albumInfo.then(data => renderAlbumInfo(data, elementAlbumInfo));

albums.then(data => renderAlbum(data.albums.items, elementAlbums));
