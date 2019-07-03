$(document).ready(function() {

    $(window).scroll(function() {
        // Fading the background elements
        var windowH = $(window).height();
        var fadedOneSet = $('.fadedOne').offset().top - $(window).scrollTop();
        var fadedTwoSet = $('.fadedTwo').offset().top - $(window).scrollTop();
        var fadedThreeSet = $('.fadedThree').offset().top - $(window).scrollTop();
        if ($(this).scrollTop() > fadedOneSet) {
            $('.fadedOne').addClass('hidden')
        } else {
            $('.fadedOne').removeClass('hidden');
        }
        if ($(this).scrollTop() > fadedTwoSet) {
            $('.fadedTwo').addClass('hidden')
        } else {
            $('.fadedTwo').removeClass('hidden');
        }
        if ($(this).scrollTop() > fadedThreeSet) {
            $('.fadedThree').addClass('hidden')
        } else {
            $('.fadedThree').removeClass('hidden');
        }

        // Link Highlighting
        var pos = $(window).scrollTop();
        var pos2 = pos + 50;

        if (pos2 > $('#main').offset().top) {highlightLink('main');}
        if (pos2 > $('#about').offset().top) {highlightLink('about');}
        if (pos2 > $('#contact').offset().top ||
            pos + $(window).height() === $(document).height()) {
            highlightLink('contact');
        }
    })
    function highlightLink(anchor) {
        $('nav .active').removeClass('active');
        $('nav').find('[dest="' + anchor + '"]').addClass('active');
    }

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Add opacity to the card text and button
    $(".pro-card-1").hover(function() {
        $(".pro-card-1 .animate-top").removeClass('hidden');
        $(".pro-card-1 .animate-bottom").removeClass('hidden');
    }, function() {
        $(".pro-card-1 .animate-top").addClass('hidden');
        $(".pro-card-1 .animate-bottom").addClass('hidden');
    });
    $(".pro-card-2").hover(function() {
        $(".pro-card-2 .animate-top").removeClass('hidden');
        $(".pro-card-2 .animate-bottom").removeClass('hidden');
    }, function() {
        $(".pro-card-2 .animate-top").addClass('hidden');
        $(".pro-card-2 .animate-bottom").addClass('hidden');
    });
    $(".pro-card-3").hover(function() {
        $(".pro-card-3 .animate-top").removeClass('hidden');
        $(".pro-card-3 .animate-bottom").removeClass('hidden');
    }, function() {
        $(".pro-card-3 .animate-top").addClass('hidden');
        $(".pro-card-3 .animate-bottom").addClass('hidden');
    })
});
