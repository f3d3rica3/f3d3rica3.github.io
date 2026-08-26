const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.addEventListener('click', (event) => {
    if (event.target.matches('.gallery img')) {
        lightbox.style.display = 'flex';
        lightboxImg.src = event.target.src;
    }
});

function closeLightbox(event) {
    if (event.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
}
