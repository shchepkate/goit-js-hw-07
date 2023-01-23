import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
return galleryItems.map(({preview, original, description}) => {
        return `<li class="gallery__item">
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`}).join('');
}

galleryContainer.addEventListener('click', onImageClick);

function onImageClick (event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    };

    const largeImage = event.target.getAttribute('href');
    let lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
   
};
      
console.log(galleryItems);
console.log(SimpleLightbox);
