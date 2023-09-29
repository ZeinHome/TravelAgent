import autoCompleteFunc from './modules/autoCompleteFunc';
import datePicker from './modules/datepicker';
import swiperCard from './modules/swiper';

autoCompleteFunc();
datePicker();
swiperCard();

import ScrollReveal from 'scrollreveal';

ScrollReveal({
  distance: '60px',
  duration: 2800,
});

ScrollReveal().reveal(
  '.header, .partners, .testimonials__grid, .footer__copyrigth',
  {
    origin: 'top',
  }
);
ScrollReveal().reveal(
  '.hint-discover, .discover__title, .populaer__title, .subscribe__desc',
  {
    origin: 'left',
  }
);
ScrollReveal().reveal(
  '.scroll-down, .discover__text, .populaer__controls, .subscribe__form',
  {
    origin: 'rigth',
  }
);
ScrollReveal().reveal(
  '.discover__picture, .discover__form, .card, .footer__nav, .subscribe'
);
// import mobileNav from './modules/mobile-nav.js';
// mobileNav();
