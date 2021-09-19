import { galleryItems } from './gallery-items.js';


const galleryRef = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

galleryRef.innerHTML = markup;


function createMarkup(data) {
  return data.map(item => {
    return `<div class="gallery__item">
              <a class="gallery__link" href="${item.original}">
                <img
                  class="gallery__image"
                  src="${item.preview}"
                  data-source="${item.original}"
                  alt="${item.description}"
                />
              </a>
            </div>`
  }).join('');
}
