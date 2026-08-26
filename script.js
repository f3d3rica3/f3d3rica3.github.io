const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let current = { g: 0, i: 0 };

function show(g, i) {
    const gal = window.__galleries[g];
    if (!gal || !gal.images.length) return;
    current = { g, i };
    lightboxImg.src = gal.images[i];
}

function step(delta) {
    const gal = window.__galleries[current.g];
    if (!gal) return;
    let i = current.i + delta;
    if (i < 0) i = gal.images.length - 1;
    if (i >= gal.images.length) i = 0;
    show(current.g, i);
}

document.addEventListener('click', (event) => {
    const img = event.target.closest('.gallery img');
    if (img) {
        show(Number(img.dataset.g), Number(img.dataset.i));
        lightbox.style.display = 'flex';
        return;
    }
    if (event.target.closest('.lb-prev')) step(-1);
    else if (event.target.closest('.lb-next')) step(1);
});

document.addEventListener('keydown', (event) => {
    if (lightbox.style.display !== 'flex') return;
    if (event.key === 'ArrowLeft') step(-1);
    if (event.key === 'ArrowRight') step(1);
    if (event.key === 'Escape') lightbox.style.display = 'none';
});

function closeLightbox(event) {
    if (!event.target.closest('.lightbox-content') && !event.target.closest('.lb-arrow')) {
        lightbox.style.display = 'none';
    }
}
