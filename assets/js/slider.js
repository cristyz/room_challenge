const fiveSeconds = 5000;
let intervalId = null;
let currentSlide = 1;

function handlePrevSlide() {
    const slide = document.querySelector(`.chair_slider_${currentSlide}`);
    slide.classList.remove('active_slide__item');

    currentSlide--;
    if (currentSlide < 1) {
        currentSlide = 3;
    }

    const prevSlide = document.querySelector(`.chair_slider_${currentSlide}`);
    prevSlide.classList.add('active_slide__item');

    handleResetInterval();
}

function handleNextSlide() {
    const slide = document.querySelector(`.chair_slider_${currentSlide}`);
    slide.classList.remove('active_slide__item');

    currentSlide++;
    if (currentSlide > 3) {
        currentSlide = 1;
    }

    const nextSlide = document.querySelector(`.chair_slider_${currentSlide}`);
    nextSlide.classList.add('active_slide__item');

    handleResetInterval();
}

function handleInitSlide() {
    intervalId = setInterval(handleNextSlide, fiveSeconds);
}

function handleResetInterval() {
    clearInterval(intervalId);
    handleInitSlide();
}

document.querySelector('.welcome_button__left').addEventListener('click', handlePrevSlide);
document.querySelector('.welcome_button__right').addEventListener('click', handleNextSlide);

handleInitSlide();