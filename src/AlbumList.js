function createMarkup(data) {
  return data.map(album => `
    <div class="list-item">
      <img src="${album.images[0].url}" alt="${album.name}" class="list-image">
      <div class="list-description">
        <p class="list-title">${album.name}</p>
        <p class="list-subtitle">${album.artists[0].name}</p>
      </div>
    </div>`).join('');
}

export default function renderAlbum(data, element) {
  const elementTarget = element;
  elementTarget.innerHTML = createMarkup(data);
}
