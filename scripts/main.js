$(document).ready(function() {
    document.getElementById("year").textContent = new Date().getFullYear();

    $(window).scroll(function() {
        // Fading the background elements
        var fadedTwoSet = $('.fadedTwo').offset().top - $(window).scrollTop();
        var fadedThreeSet = $('.fadedThree').offset().top - $(window).scrollTop();
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

        if (pos2 > $('#about').offset().top) {highlightLink('about');}
        if (pos2 > $('#portfolio').offset().top) {highlightLink('portfolio');}
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

    // Add skills bars
    const skills = [
        {
            name: 'HTML',
            percentage: 95,
        },
        {
            name: 'CSS',
            percentage: 85,
        },
        {
            name: 'Next.js',
            percentage: 95,
        },
        {
            name: 'PHP',
            percentage: 90,
        },
        {
            name: 'Laravel',
            percentage: 90,
        },
        {
            name: 'Vue.js',
            percentage: 85,
        },
        {
            name: 'Angular',
            percentage: 85,
        },
        {
            name: 'React',
            percentage: 90,
        },
        {
            name: 'Node.js',
            percentage: 95,
        },
        {
            name: 'JavaScript',
            percentage: 85,
        },
        {
            name: 'MySQL',
            percentage: 90
        },
        {
            name: 'PostgreSQL',
            percentage: 90
        },
        {
            name: 'Python',
            percentage: 85
        },
    ];

    skills.forEach(skill => {
        $('.skills').append(`
            <div class="progress rounded-0">
                <div class="progress-bar named-bar">${skill.name}</div>
                <div class="d-flex align-items-center">
                    <div class="progress-bar h-100" style="width: ${skill.percentage}%"></div>
                    <span>${skill.percentage}%</span>
                </div>
            </div>
        `)
    });

    // Add portfolio
    const projects = [
        // {
        //     name: 'OpenClassify',
        //     thumbnail: 'openclassify.png',
        //     description: 'OpenClassify is modular and one of the most advanced open source classified app script built with Laravel.',
        //     builtWith: 'Laravel',
        //     link: 'https://openclassify.com/',
        // },
        {
            name: 'Transfer Travel',
            thumbnail: 'transfertravel.png',
            description: 'TransferTravel.com is the world’s leading secondary travel marketplace. Recover money from your unused travel plans, whether it’s an airline ticket, holiday booking, accommodation, or cruise.',
            builtWith: 'Laravel, Angular & MySQL',
            link: 'https://transfertravel.com/',
        },
        {
            name: 'Running Imp',
            thumbnail: 'runningimp.png',
            description: 'Running Imp are the experts in running and mass participation event supplies, providing everything event organisers need to make their event a success.',
            builtWith: 'Laravel, Next.js & MySQL',
            link: 'https://runningimp.co.uk/',
        },
        {
            name: 'Prestbury Travel',
            thumbnail: 'prestburytravel.png',
            description: 'The Prestbury Travel Group was founded in 1983 by Stella and Peter Bosworth and, with their children James & Emma, is one of only a few truly independent family-owned and run, luxury travel operators in the UK. With Emma as Sales & Marketing Director and James taking over as Managing Director, they have added a new dimension in driving the business forward.',
            builtWith: 'Laravel, React & MySQL',
            link: 'https://prestburytravel.co.uk/',
        },
        {
            name: 'Tripsitta',
            thumbnail: 'tripsitta.png',
            description: 'Need a sitter for your Trip? Book Fully-Vetted childcare in just a click!',
            builtWith: 'Laravel, Vue.js & PostgreSQL',
            link: 'https://www.tripsitta.com/',
        },
        {
            name: 'Marble Training',
            thumbnail: 'marble.png',
            description: 'Marble Training offers a range of health and safety courses, including CITB, CSCS, IOSH and NEBOSH, in various formats and locations.',
            builtWith: 'Laravel, Next.js & MySQL',
            link: 'https://marbletraining.co.uk/',
        },
        {
            name: 'Mosque World',
            thumbnail: 'mosqueworld.png',
            description: 'A state of the art platform to help automate your Mosque processes and bring your online Mosque presence to life.',
            builtWith: 'Laravel, Next.js & MySQL',
            link: 'https://mosqueworld.com/',
        },
        {
            name: 'Academic Support',
            thumbnail: 'acasup.png',
            description: 'A website to help students with their assignment.',
            builtWith: 'Laravel',
            link: 'https://academicsupport.me/',
        },
        {
            name: 'AiroLuggage',
            thumbnail: 'airo.png',
            description: 'AiroLuggage provides a National and International Luggage and Baggage Delivery Service so travelling is safe, easy and stress-free.',
            builtWith: 'Laravel & VueJS',
            link: 'https://airoluggage.com/',
        },
        {
            name: 'Bonabag',
            thumbnail: 'bonabag.png',
            description: 'We are all designers at heart. Design and order your custom bag.',
            builtWith: 'WordPress & React',
            link: 'https://my.bonabag.com/',
        },
    ];
    
    projects.forEach(project => {
        $('.project-container').append(`
            <div class="border-bottom">
                <div class="container">
                    <div class="row align-items-center text-center text-lg-left">
                        <div class="col-lg-6 p-lg-0">
                            <img src="images/${project.thumbnail}" class="w-100 showcase__preview">
                        </div>
                        <div class="col-lg-5 mx-auto py-3">
                            <h3 class="mb-4">${project.name}</h3>
                            <p class="showcase__description mb-4 color-theme">${project.description}</p>
                            <p class="color-theme mb-4"><small>Built with <span>${project.builtWith}</span></small>.</p>
                            <a href="${project.link}" data-lity
                                class="btn btn-preview mr-lg-3 d-none d-lg-inline-block rounded-0 px-4 py-2">
                                Preview
                            </a>
                            <a href="${project.link}" class="btn btn-visit rounded-0 px-4 py-2"
                                target="_blank">
                                Visit site
                            </a>
                        </div>
                    </div>      
                </div>
            </div>
        `)
    })
});
