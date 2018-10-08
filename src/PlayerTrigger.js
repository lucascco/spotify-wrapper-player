/* eslint-env browser */
const elementTracksList = document.getElementById('album-tracks');
let trackPlaying = null;


export default function playerTriggers() {
  elementTracksList.addEventListener('click', (e) => {
    const elementTarget = e.target.parentNode;
    if (trackPlaying) {
      trackPlaying.pause();
    }
    if (!elementTarget.classList.contains('active')) {
      trackPlaying = new Audio(elementTarget.getAttribute('data-track-preview'));
      trackPlaying.play();
      elementTarget.classList.add('active');
      trackPlaying.addEventListener('pause', () => {
        elementTarget.classList.remove('active');
      });
    }
  });
}
