import { galleryItems } from "./gallery-items.js";
// Change code below this line

const photoGallery = document.querySelector(".gallery");

const galleryBox = galleryItems.map(({ preview, original, description }) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
</div>`;
});

let modalBox;

photoGallery.insertAdjacentHTML("afterbegin", galleryBox.join(""));

photoGallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  modalBox = basicLightbox.create(
    `<img src="${event.target.dataset.source}"/>`,
    {
      onShow: () => {
        window.addEventListener("keydown", closeModal);
      },
      onClose: () => {
        window.addEventListener("keydown", closeModal);
      },
    }
  );

  modalBox.show();
});

function closeModal(event) {
  if (event.code !== "Escape") {
    return;
  }
  modalBox.close();
}
