/*========== sticky navbar ==========*/
window.onscroll = () => {
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);
};


/*========== swiper ==========*/
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
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /*========== swiper extra ==========*/
  // Initialize Swiper
const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  direction: 'horizontal', // Direction of the slides
  loop: true, // Enable looping of slides

  // Pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true, // Allow pagination bullets to be clickable
  },

  // Navigation buttons
  navigation: {
      nextEl: '.swiper-button-next', // Next button
      prevEl: '.swiper-button-prev', // Previous button
  },

  // Autoplay (optional)
  autoplay: {
      delay: 5000, // Delay between transitions (in milliseconds)
      disableOnInteraction: false, // Continue autoplay after user interaction
  },

  // Responsive breakpoints (optional)
  breakpoints: {
      640: {
          slidesPerView: 1, // Show 1 slide on small screens
      },
      768: {
          slidesPerView: 2, // Show 2 slides on medium screens
      },
      1024: {
          slidesPerView: 3, // Show 3 slides on large screens
      },
  },
});

document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
          el: ".swiper-pagination",
          clickable: true
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
      },
      breakpoints: {
          // When window width is >= 768px
          768: {
              slidesPerView: 1,
              spaceBetween: 30
          }
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Optional: Add subtle hover effects
  const sdgSlides = document.querySelectorAll('.SDG-slide-content');
  
  sdgSlides.forEach(slide => {
      slide.addEventListener('mouseenter', function() {
          this.style.transform = 'scale(1.02)';
          this.style.transition = 'transform 0.3s ease';
      });
      
      slide.addEventListener('mouseleave', function() {
          this.style.transform = 'scale(1)';
      });
  });

  // Swiper initialization remains the same
  var swiper = new Swiper(".mySwiper", {
      // ... previous configuration
      effect: 'creative', // Optional: adds a creative transition effect
      creativeEffect: {
          prev: {
              shadow: true,
              translate: ['-20%', 0, -1],
          },
          next: {
              translate: ['100%', 0, 0],
          },
      },
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Ensure Swiper is available
  if (typeof Swiper !== 'undefined') {
      new Swiper(".mySwiper", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
              el: ".swiper-pagination",
              clickable: true
          },
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
          },
          effect: 'creative',
          creativeEffect: {
              prev: {
                  shadow: true,
                  translate: ['-120%', 0, -500],
              },
              next: {
                  shadow: true,
                  translate: ['120%', 0, -500],
              },
          }
      });
  } else {
      console.error('Swiper library not loaded');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Swiper Initialization
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
          el: ".swiper-pagination",
          clickable: true
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
      },
      effect: 'creative',
      creativeEffect: {
          prev: {
              shadow: true,
              translate: ['-120%', 0, -500],
          },
          next: {
              shadow: true,
              translate: ['120%', 0, -500],
          },
      }
  });
});