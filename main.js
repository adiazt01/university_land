import {
  CLASS_BG_PRIMARY,
  CLASS_BG_WHITE,
  CLASS_BG_TRANSPARENT,
  CLASS_SHADOW,
  CLASS_LINK_LIGHT,
  CLASS_LINK_PRIMARY,
} from "./js/constants/constants.js";

import { toggleClasses, toggleLinkClasses } from "./js/utils/class.js";

window.addEventListener("scroll", function () {
  const topNav = document.querySelector(".top-header");
  const navbar = document.querySelector(".navbar");
  const topNavLinks = document.querySelectorAll(".top-header a");
  const scrollPosition = window.scrollY;

  if (scrollPosition >= window.innerHeight) {
    toggleClasses(topNav, [CLASS_BG_WHITE], [CLASS_BG_PRIMARY]);
    toggleClasses(
      navbar,
      [CLASS_BG_PRIMARY, CLASS_SHADOW],
      [CLASS_BG_TRANSPARENT, CLASS_BG_WHITE]
    );

    toggleLinkClasses(topNavLinks, CLASS_LINK_PRIMARY, CLASS_LINK_LIGHT);
  } else {
    toggleClasses(topNav, [CLASS_BG_PRIMARY], [CLASS_BG_WHITE]);
    toggleClasses(
      navbar,
      [CLASS_BG_TRANSPARENT, CLASS_BG_WHITE],
      [CLASS_BG_PRIMARY, CLASS_SHADOW]
    );
    toggleLinkClasses(topNavLinks, CLASS_LINK_LIGHT, CLASS_LINK_PRIMARY);
  }
});

new Swiper(".carousel-tutors", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 70,
    },
  },
});

new Swiper(".carousel-testimonials", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 0,
  pagination: {
    el: ".swiper-testimonial-pagination",
    clickable: true,
  },
});
