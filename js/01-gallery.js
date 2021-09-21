import { galleryItems } from './gallery-items.js';


const galleryRef = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);
let instance = {};

galleryRef.innerHTML = markup;

galleryRef.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }
  
  openModalPicture(e.target);
});
  
function createLightBox(picture) {
  return basicLightbox.create(`
          <img src="${picture.dataset.source}" width="800" height="600">
  `);
}

function openModalPicture(picture) {
  instance = createLightBox(picture);

  instance.show();
  
  window.addEventListener('keydown', closeModalOnEsc);
}

function closeModalOnEsc(e) {
    if (e.code !== 'Escape') {
      return;
    }

    instance.close();
    
    window.removeEventListener('keydown', closeModalOnEsc);
}

function createMarkup(data) {
  return data.map(( {preview, original, description} ) => {
    return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>
            </div>`
  }).join('');
}
