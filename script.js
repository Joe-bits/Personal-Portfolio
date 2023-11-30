/*====== Read more button ======*/
document.addEventListener("DOMContentLoaded", function () {
  const readMoreButtons = document.querySelectorAll(".read-more");

  readMoreButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const modalContainer = button.parentElement.querySelector(".additional-info-modal");
      modalContainer.style.display = (modalContainer.style.display === "block") ? "none" : "block";
    });
  });

  /*====== Menu icon navbar ======*/
  let menuIcon = document.querySelector('#menu-icon'); // Corrected ID
  let navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };

  /*====== Scroll section active link ======*/
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      }
    });

    /*====== Sticky navbar ======*/
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*====== Remove menu icon navbar when clicking navbar link (scroll) ======*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  };
});

/*====== Swiper ======*/
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  });
});

/*====== Dark mode ======*/
document.addEventListener("DOMContentLoaded", function () {
  // Correct the dark mode icon ID
  let darkModeIcon = document.getElementById('darkMode-icon');

  darkModeIcon.onclick = () => {
    // Toggle between light and dark mode classes
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
  };

  /*====== Scroll reveal ======*/
  ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img img, .services-container .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
  ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
});