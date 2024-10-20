// Lightbox functionality
function openLightbox(imgSrc) {
    document.getElementById("lightbox-img").src = imgSrc;
    document.getElementById("lightbox").style.display = "flex"; // Change to flex for centering
}

function closeLightbox(event) {
    // Check if the clicked element is the lightbox itself (not the image)
    if (event.target === document.getElementById("lightbox")) {
        document.getElementById("lightbox").style.display = "none";
    }
}

// Slideshow functionality
function initSlideshow(slideshowId, totalSlides) {
    let slideIndex = 1; // Start from the first slide
    showSlides(slideIndex, slideshowId, totalSlides); // Show the first slide on load

    return {
        next: function() {
            slideIndex++; // Move to the next slide
            if (slideIndex > totalSlides) slideIndex = 1; // Loop back to first slide if exceeds
            showSlides(slideIndex, slideshowId, totalSlides);
        },
        prev: function() {
            slideIndex--; // Move to the previous slide
            if (slideIndex < 1) slideIndex = totalSlides; // Loop back to last slide if goes below
            showSlides(slideIndex, slideshowId, totalSlides);
        },
        setSlideIndex: function(n) {
            slideIndex = n;
            showSlides(slideIndex, slideshowId, totalSlides);
        }
    };
}

// Initialize your slideshows here
const slideshow1 = initSlideshow('slideshow1', 20);
const slideshow2 = initSlideshow('slideshow2', 2); // Updated total slides for Umbria
const slideshow3 = initSlideshow('slideshow3', 6); // For Portraits of Friends

function plusSlides(n, slideshowNum) {
    if (slideshowNum === 1) {
        n > 0 ? slideshow1.next() : slideshow1.prev();
    } else if (slideshowNum === 2) {
        n > 0 ? slideshow2.next() : slideshow2.prev();
    } else if (slideshowNum === 3) {
        n > 0 ? slideshow3.next() : slideshow3.prev();
    }
}

function showSlides(n, slideshowId, totalSlides) {
    const slides = document.querySelectorAll(`#${slideshowId} .mySlides`);
    const currentSlideIndex = document.getElementById(`currentSlideIndex${slideshowId.charAt(slideshowId.length - 1)}`);
    const totalSlidesElement = document.getElementById(`totalSlides${slideshowId.charAt(slideshowId.length - 1)}`);

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Display the correct slide
    slides[n - 1].style.display = "block";  

    // Update the slide index display
    currentSlideIndex.textContent = n; 
    totalSlidesElement.textContent = totalSlides; 
}

// Event listener to close the lightbox
document.getElementById("lightbox").addEventListener("click", closeLightbox);
