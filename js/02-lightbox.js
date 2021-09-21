import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

galleryRef.innerHTML = markup;

const lightbox = new SimpleLightbox('.gallery a', { captions: true, captionsData: 'alt', captionDelay: 250 });

function createMarkup(data) {
  return data.map(( {preview, original, description} ) => {
    return `<a class="gallery__item" href="${original}">
              <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`
  }).join('');
}


