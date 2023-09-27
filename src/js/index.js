import autoCompleteFunc from './modules/autoCompleteFunc';

autoCompleteFunc();
// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

import { easepick, TimePlugin } from '@easepick/bundle';

const picker = new easepick.create({
  element: document.getElementById('datepicker'),
  css: [
    'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
    'https://cdn.jsdelivr.net/npm/@easepick/time-plugin@1.2.1/dist/index.css',
  ],
  format: 'HH:mm, DD/MM/YY',
  plugins: [TimePlugin],
});
