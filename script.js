const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const images = document.querySelectorAll('.gallery img');

images.forEach((image) => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = image.src;
    });
});

function closeLightbox(event) {
    if (event.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
}
