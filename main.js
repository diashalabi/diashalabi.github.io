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

        // Animate progress bars
        let skillsTopset = $('.skills.col-md-6').offset().top;
        let halfWindow =  $(window).scrollTop() + ($(window).height() * (2 / 3));
        if (skillsTopset <= halfWindow) {
            $(".progress-bar.progress-1").animate({width: '64%'}, {
                duration: 2000,
                easing: "easeOutExpo",
                start: function() {
                    setTimeout(function() {
                        $(".progress-bar.progress-2").animate({width: '72%'}, {
                            duration: 2000,
                            easing: 'easeOutExpo',
                            start: function() {
                                setTimeout(function() {
                                    $(".progress-bar.progress-3").animate({width: '60%'}, {
                                        duration: 2000,
                                        easing: 'easeOutExpo',
                                        start: function() {
                                            setTimeout(function() {
                                                $(".progress-bar.progress-4").animate({width: '64%'}, {
                                                    duration: 2000,
                                                    easing: 'easeOutExpo',
                                                    start: function() {
                                                        setTimeout(function() {
                                                            $(".progress-bar.progress-5").animate({width: '60%'}, {
                                                                duration: 2000,
                                                                easing: 'easeOutExpo',
                                                                start: function() {
                                                                    setTimeout(function() {
                                                                        $(".progress-bar.progress-6").animate({width: '48%'}, {
                                                                            duration: 2000,
                                                                            easing: 'easeOutExpo',
                                                                            start: function() {
                                                                                setTimeout(function() {
                                                                                    $(".progress-bar.progress-7").animate({width: '48%'}, {
                                                                                        duration: 2000,
                                                                                        easing: 'easeOutExpo',
                                                                                        start: function() {
                                                                                            setTimeout(function() {
                                                                                                $(".progress-bar.progress-8").animate({width: '48%'}, {
                                                                                                    duration: 2000,
                                                                                                    easing: 'easeOutExpo',
                                                                                                    start: function() {
                                                                                                        setTimeout(function() {
                                                                                                            $(".progress-bar.progress-9").animate({width: '40%'}, {
                                                                                                                duration: 2000,
                                                                                                                easing: 'easeOutExpo'
                                                                                                            })
                                                                                                        }, 70)
                                                                                                    }
                                                                                                })
                                                                                            }, 70)
                                                                                        }
                                                                                    })
                                                                                }, 70)
                                                                            }
                                                                        })
                                                                    }, 70)
                                                                }
                                                            })
                                                        }, 70)
                                                    }
                                                })
                                            }, 70)
                                        }
                                    })
                                }, 70)
                            }
                        })
                    }, 70)
                }
            })
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

// jQueryUI
$.easing.jswing = $.easing.swing;

$.extend($.easing,
{
    def: 'easeOutQuad',
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    }
});
