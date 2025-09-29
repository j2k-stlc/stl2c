document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('#cityCarousel');
  if (carousel) {
    new bootstrap.Carousel(carousel, {
      interval: 4000,   // 4 seconds per slide
      ride: 'carousel', // start cycling automatically
      wrap: true        // loop infinitely
    });
  }
});
