import 'jsdom-global/register';
import { expect } from 'chai';

import renderAlbumTracks from './../src/AlbumTracks.js';

describe('AlbumTracks', () => {
  const data = [
    {
      "preview_url": "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number": 1,
      "name": "Around The World",
      "duration_ms": 238733
    }
  ];

  const data2 = [
    {
      "preview_url": "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number": 1,
      "name": "Around The World",
      "duration_ms": 238733
    },
    {
      "preview_url": "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number": 1,
      "name": "Around The World",
      "duration_ms": 238733
    }
  ];


  it('should create and append markup to correc data', () => {
    const markup = `
    <div class="music active" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">1</p>
      <p class="music-title">Around The World</p>
      <p class="music-duration">238733</p>
    </div>`;
    const element = document.createElement('div');
    renderAlbumTracks(data, element);
    expect(element.innerHTML).to.be.eql(markup);
  });

  it('should create and append markup to all itens', () => {
    const markup = `
    <div class="music active" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">1</p>
      <p class="music-title">Around The World</p>
      <p class="music-duration">238733</p>
    </div>
    <div class="music active" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">1</p>
      <p class="music-title">Around The World</p>
      <p class="music-duration">238733</p>
    </div>`;
    const element = document.createElement('div');
    renderAlbumTracks(data2, element);
    expect(element.innerHTML).to.be.eql(markup);
  });
});