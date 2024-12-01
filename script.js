let currentSlide = 0;

function prevSlide() {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;
    currentSlide = (currentSlide + 1) % totalSlides;
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function openCard() {
    // Hide the carousel cover and show the card
    document.querySelector('.carousel-cover').classList.add('hidden');
    document.querySelector('.card-container').classList.remove('hidden');
}

function sendLove() {
    alert('Love sent with all my heart! ❤️');
}
