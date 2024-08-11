function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }

  window.onscroll = function() {
    var navbar = document.getElementById("nav-bar");
    if (window.scrollY > 50) { // Muda o valor conforme a necessidade
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};
