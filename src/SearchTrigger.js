/* eslint-env browser */
import spotify from './Spotify';
import renderAlbum from './AlbumList';

const elementAlbums = document.getElementById('albums_list');
const elementInputSearch = document.getElementById('search-input');
const elementFormSearch = document.getElementById('search-form');

export default function searchTrigger() {
  elementFormSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    const albums = spotify.search.albums(elementInputSearch.value);
    albums.then(data => renderAlbum(data.albums.items, elementAlbums));
  });
}
