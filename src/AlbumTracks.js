export default function renderAlbumTracks(data, element) {
 element.innerHTML = data.map(track => `
    <div class="music active" data-track-preview="${track.preview_url}">
      <p class="music-number">${track.track_number}</p>
      <p class="music-title">${track.name}</p>
      <p class="music-duration">${track.duration_ms}</p>
    </div>`).join('');
}
