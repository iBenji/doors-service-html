const headerPhoto = document.querySelector('.header__top');
const photos = ['/img/jpg/hhphoto1.jpg', '/img/jpg/hhphoto2.jpg']; // Здесь указывайте пути к фотографиям

var currentPhotoIndex = 0;

function changePhoto() {
    headerPhoto.style.backgroundImage = 'url(' + photos[currentPhotoIndex] + ')';
    currentPhotoIndex++;

    if (currentPhotoIndex >= photos.length) {
        currentPhotoIndex = 0;
    }
}

changePhoto(); // Отображение фото сразу после загрузки страницы
setInterval(changePhoto, 5000); // Изменять фотографию каждые 5 секунд (5000 миллисекунд)

// Свайпер под шапкой

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });