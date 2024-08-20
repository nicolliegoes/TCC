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
