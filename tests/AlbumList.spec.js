import 'jsdom-global/register';
import { expect } from 'chai';
import renderAlbum from '../src/AlbumList';

describe('AlbumList', () => {
  it('should exist', () => {
    expect(renderAlbum).to.be.exist;
  });

  const dataAlbum = [
    {
      "album_type" : "album",
      "artists" : [ {
        "name" : "Incubus",
      }],
      "id" : "6peEdPVO73WtgGah5sEhX4",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16",
        "width" : 64
      } ],
      "name" : "The Essential Incubus",
      "type" : "album",
    }
  ]

  const dataAlums2 = [
    {
      "album_type" : "album",
      "artists" : [ {
        "name" : "Incubus",
      } ],
      "id" : "6peEdPVO73WtgGah5sEhX4",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16",
        "width" : 64
      } ],
      "name" : "The Essential Incubus",
      "type" : "album",
    },
    {
      "album_type" : "album",
      "artists" : [ {
        "name" : "Incubus",
      } ],
      "id" : "6peEdPVO73WtgGah5sEhX4",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16",
        "width" : 64
      } ],
      "name" : "The Essential Incubus",
      "type" : "album",
    }
  ];

  const markup = `
    <div class="list-item">
      <img src="${dataAlbum[0].images[0].url}" alt="${dataAlbum[0].name}" class="list-image">
      <div class="list-description">
        <p class="list-title">${dataAlbum[0].name}</p>
        <p class="list-subtitle">${dataAlbum[0].artists[0].name}</p>
      </div>
    </div>`;


    const markup2 = `
    <div class="list-item">
      <img src="${dataAlums2[0].images[0].url}" alt="${dataAlums2[0].name}" class="list-image">
      <div class="list-description">
        <p class="list-title">${dataAlums2[0].name}</p>
        <p class="list-subtitle">${dataAlums2[0].artists[0].name}</p>
      </div>
    </div>
    <div class="list-item">
      <img src="${dataAlums2[1].images[0].url}" alt="${dataAlums2[1].name}" class="list-image">
      <div class="list-description">
        <p class="list-title">${dataAlums2[1].name}</p>
        <p class="list-subtitle">${dataAlums2[1].artists[0].name}</p>
      </div>
    </div>`;

  it('should append the markup album as data', () => {
    const element = document.createElement('div');
    renderAlbum(dataAlbum, element);
    expect(element.innerHTML).to.be.eql(markup);
  });

  it('shouyld append an list of albuns as data', () => {
    const element2 = document.createElement('div');
    renderAlbum(dataAlums2, element2);
    expect(element2.innerHTML).to.be.eqls(markup2);
  });
});
