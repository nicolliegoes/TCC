function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }

document.addEventListener('scroll', function() {
    const navLinks = document.querySelector('.nav-links');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) { 
        navLinks.classList.add('nav-background');
    } else {
        navLinks.classList.remove('nav-background');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var acc = document.getElementsByClassName("accordion-button");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});

let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-images img');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function createDots() {
    const totalSlides = document.querySelectorAll('.carousel-images img').length;
    const dotsContainer = document.querySelector('.dots');
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.addEventListener('click', () => {
            currentSlide = i;
            moveSlide(0); 
        });
        dotsContainer.appendChild(dot);
    }
    updateDots();
}

document.querySelector('.prev').addEventListener('click', () => moveSlide(1));
document.querySelector('.next').addEventListener('click', () => moveSlide(-1));

createDots();