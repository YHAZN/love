let currentSlide = 0;

function openCard() {
    const card = document.querySelector('.card');
    card.classList.add('open');
}

function sendLove() {
    alert('Love sent with all my heart! ❤️');
}

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;
    currentSlide = (index + totalSlides) % totalSlides; // Ensure looping
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Automatically transition slides every 3 seconds
setInterval(() => {
    nextSlide();
}, 3000);
