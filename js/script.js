$(document).ready(function() {
  var navbar = $("#navbar");
  var slideUp = "nav-slideUp";
  var loading = $("#loading");
  var scroll;
  var modal = false;

    //Hide the loading screen
    loading.hide();

    //Initialize materialize carousel
    $('.carousel.carousel-slider').carousel({full_width: true});

    $('#modalContact').modal();

    //Skillbar animation
    $('.skillbar').each(function() {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 2700);
    });

    //Hide navbar when scrolling & show up floating button
    $(document).scroll(function() {
        scroll = $(this).scrollTop();
        if (scroll > 100) {
            navbar.addClass(slideUp);
            $("#floating-btn").removeClass("hidden");
        }
    });

    //Show navbar & hide floating button
    $(document).scroll(function() {
        scroll = $(this).scrollTop();
        if (scroll <= 0) {
            navbar.removeClass(slideUp);
            $("#floating-btn").addClass("hidden");
        }
    });

    //Show navbar when floating button is clicked
    $("#floating-btn").click(function() {
        if ((navbar.hasClass(slideUp))) {
            navbar.removeClass(slideUp);
        } else {
            navbar.addClass(slideUp)
        }
    });
});
