"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderAlbum;

function createMarkup(data) {
  return data.map(function (album) {
    return "\n    <div class=\"list-item\">\n      <img src=\"".concat(album.images[0].url, "\" alt=\"").concat(album.name, "\" class=\"list-image\">\n      <div class=\"list-description\">\n        <p class=\"list-title\">").concat(album.name, "</p>\n        <p class=\"list-subtitle\">").concat(album.artists[0].name, "</p>\n      </div>\n    </div>");
  }).join('');
}

function renderAlbum(data, element) {
  var elementTarget = element;
  elementTarget.innerHTML = createMarkup(data);
}