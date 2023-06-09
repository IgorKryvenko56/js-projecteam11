import { gallerysupport } from './gallery-supportukrain';
//import Slick from "slick-carousel";

const galleryEl = document.querySelector('.gallery-support');
const itemsGalleryEl = createItemsGallery(gallerysupport);
galleryEl.insertAdjacentHTML('beforeend', itemsGalleryEl);
// galleryEl.addEventListener('click', onImgClick);

function createItemsGallery(items) {
  return items
    .map(({ title, url, img }) => {
      return `<li class="gallery__item_support fade">
  <a class="gallery__link" href="${url}">
    <img
      class="gallery__image"
      src="${img}"
    />
  </a>
</li>`;
    })
    .join('');
}
