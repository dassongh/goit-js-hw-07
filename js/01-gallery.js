import { galleryItems } from './gallery-items.js';


const galleryRef = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

galleryRef.innerHTML = markup;

galleryRef.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  openModalPicture(e.target);
});

function openModalPicture(picture) {
  const instance = basicLightbox.create(`
    <img src="${picture.dataset.source}" width="800" height="600">
  `);

  instance.show();
}

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
