"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _spotifyWrapper = _interopRequireDefault(require("spotify-wrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var spotify = new _spotifyWrapper.default({
  token: 'BQBUbGiYZuhJorYIVtZI8ZokGfu1Z0qMtUHE43cJC3zIjvUD5ExB4bJjBo50OxQ0kQE5hYizwbUb2eyxe1YLIZykezgSdzyXKvrnc7Aw1taxa0CZOkTg3V3ED2gUXDRCZFMQOwETVdwMuIdDsLs3'
});
var _default = spotify;
exports.default = _default;