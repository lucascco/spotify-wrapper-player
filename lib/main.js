"use strict";

var _Spotify = _interopRequireDefault(require("./Spotify"));

var _AlbumList = _interopRequireDefault(require("./AlbumList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var albums = _Spotify.default.search.albums('Incubus');

console.log(albums);