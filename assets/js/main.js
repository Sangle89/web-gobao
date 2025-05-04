import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "../css/style.css";

// Initialize Swiper
const swiper = new Swiper(".swiper-container", {
  // modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
