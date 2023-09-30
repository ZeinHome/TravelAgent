import ScrollReveal from 'scrollreveal';

ScrollReveal({
  distance: '80px',
  duration: 2800,
});

function scrollAniimation() {
  ScrollReveal().reveal(' .partners, .testimonials__grid, .footer__copyrigth', {
    origin: 'top',
  });
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
}

export default scrollAniimation;
