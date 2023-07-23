
// sub nav bar scroll lock
var subNavbar = document.getElementById('subNav');
var navLinks = subNavbar.getElementsByClassName('nav-link');
var subNavbarOffset = subNavbar.offsetTop;

/*
function toggleActiveClass(event) {
    event.preventDefault();
    var currentActive = subNavbar.querySelector('.active');
    if (currentActive) {
        currentActive.classList.remove('active');
    }
    this.classList.add('active');
}

for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', toggleActiveClass);
}*/

window.addEventListener('scroll', function () {

    if (window.pageYOffset >= subNavbarOffset) {
        subNavbar.classList.add('fixed-top');
    } else {
        subNavbar.classList.remove('fixed-top');
    }
})

// load solutions, product page
$(function(){
  $("#solutions-section").load("includes/solutions.html");
  //$("#products-section").load("includes/products.html");
});

$(document).ready(function () {
    $('.nav-link').click(function (event) {
        event.preventDefault();

        var selectedLink = $(this);
        var selectedSectionId = selectedLink.attr('href');
        var selectedSection = $(selectedSectionId);

        // Remove active class from all nav links
        $('.nav-link').removeClass('active');

        // Add active class to the selected nav link
        selectedLink.addClass('active');

        // Hide all sections except the selected one
        $('.section').addClass('hidden');
        selectedSection.removeClass('hidden');
    });
});

/* filter list */
$(document).ready(function() {
    $('.category-title').click(function() {
      $(this).siblings('.category-levels').slideToggle();
    });
  });
  
