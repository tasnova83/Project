//------Menu section start 
$('.collection-show').click(function(){
    $('.dropdown').slideToggle();
});
//-------Menu section end

//----Mobile menu start
$('.mobile-hide').hide();

/* FIX: mobile-show প্রথমে visible করা হলো */
$('.mobile-show').show();

$('.tutorials-hide').hide();
$('.menu-dropdown').hide();
$('.mobile-menu').hide();

$('.tutorials-show').click(function(){
  $('.menu-dropdown').slideDown();
    $('.tutorials-show').hide();
    $('.tutorials-hide').show();
});

$('.tutorials-hide').click(function(){
  $('.menu-dropdown').slideUp();
    $('.tutorials-show').show();
    $('.tutorials-hide').hide();
});

$('.mobile-show').click(function(){
  $('.mobile-menu').slideDown();
  $('.mobile-show').hide();
  $('.mobile-hide').show();
});

$('.mobile-hide').click(function(){
  $('.mobile-menu').slideUp();
  $('.mobile-show').show();
  $('.mobile-hide').hide();
});

$('.click-menu').click(function(){
  $('.mobile-menu').slideUp();
  $('.mobile-show').show();
  $('.mobile-hide').hide();
})
//----Mobile menu end




//------ Scroll animation start
$(window).scroll(function() {
    $('.fadeLeft, .fadeRight').each(function() {
        let elementTop = $(this).offset().top;
        let windowBottom = $(window).scrollTop() + $(window).height();

        if (windowBottom > elementTop + 100) {
            $(this).addClass('show');
        }
    });
});
//------ Scroll animation end

$(window).scroll(function() {
    $('.fade-in').each(function() {
        let elementTop = $(this).offset().top;
        let windowBottom = $(window).scrollTop() + $(window).height();

        if (windowBottom > elementTop + 80) {
            $(this).addClass('show');
        }
    });
});


//-------testimonial section start
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//-------testimonial section end



//-------faq section start
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active1");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//-------faq section end