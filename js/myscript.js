$(function() {
$('.Home-banner').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: false,
  dots: true,
//   navText: [
//     '<i class="fa-solid fa-arrow-left"></i>',
//     '<i class="fa-solid fa-arrow-right"></i>'
// ],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})
//sec 2
$('.treat-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  dots: false,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1.3
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})
// sec 3
$('.best-seller').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  dots: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 2
    },
    1100: {
      items: 3
    }
  }
})
// sec 5
$('.gifting-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: false,
  dots: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1.2
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})
// branch sec
$('.branch-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: false,
  dots: false,
  navText: [
    '<i class="fa-solid fa-chevron-left"></i>',
    '<i class="fa-solid fa-chevron-right"></i>'
],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})
});


$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Read Less") {
    $(this).text("Read More")
  } else {
    $(this).text("Read Less")
  }
});