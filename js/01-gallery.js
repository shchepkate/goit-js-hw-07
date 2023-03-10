import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`}).join('');
}
console.log(galleryItems);

      
galleryContainer.addEventListener('click', onImageClick);

const instance = basicLightbox.create(`<img scr = ''>`, {
    onShow: instance => {
        window.addEventListener('keydown', onEscape);
    },
    onClose: instance => {
        window.removeEventListener('keydown', onEscape);
    }
})

function onImageClick (event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    };
    instance.element().querySelector('img').src = event.target.dataset.source;

instance.show();
}


function onEscape(event) {
    if (event.code === 'Escape') {
    instance.close();
    return;
    }   
}


