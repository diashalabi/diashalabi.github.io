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
            percentage: 80,
        },
        {
            name: 'JavaScript',
            percentage: 80,
        },
        {
            name: 'PHP',
            percentage: 75,
        },
        {
            name: 'Laravel',
            percentage: 80,
        },
        {
            name: 'VueJS',
            percentage: 80,
        },
        {
            name: 'AngularJS',
            percentage: 75,
        },
        {
            name: 'React',
            percentage: 75,
        },
        {
            name: 'Node.js',
            percentage: 80,
        },
    ];

    skills.forEach(skill => {
        $('.skills').append(`
            <div class="progress">
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
        {
            name: 'Openclassify',
            thumbnail: 'openclassify.png',
            description: 'OpenClassify is modular and one of the most advanced open source classified app script built with Laravel.',
            builtWith: 'Laravel',
            link: 'https://openclassify.com/',
        },
        {
            name: 'Bonabag',
            thumbnail: 'bonabag.png',
            description: 'We are all designers at heart. Design and order your custom bag.',
            builtWith: 'WordPress & React',
            link: 'https://my.bonabag.com/',
        },
        {
            name: 'Berlin Barbers',
            thumbnail: 'barberlin.png',
            description: 'A web app that allows you to book an appointment online.',
            builtWith: 'Laravel',
            link: 'https://berlinbarbers.com/',
        },
        {
            name: 'Binlerce Araba',
            thumbnail: 'binlercearaba.png',
            description: 'A website for buying and selling used vehicles.',
            builtWith: 'Laravel',
            link: 'https://binlercearaba.com/',
        },
        {
            name: 'Emlak 24',
            thumbnail: 'emlak24.png',
            description: 'Create a custom demand that suits your inquiries and the agents will send you the ads that they find suitable.',
            builtWith: 'Laravel & VueJS',
            link: 'https://emlak24.com/',
        },
        {
            name: 'Celep',
            thumbnail: 'celep.png',
            description: 'A website for buying and selling cattle.',
            builtWith: 'Laravel',
            link: 'http://celep.com/',
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
                            <p class="showcase__description mb-4 color-gray">${project.description}</p>
                            <p class="color-gray mb-4"><small>Built with <span>${project.builtWith}</span></small>.</p>
                            <a href="${project.link}" data-lity
                                class="btn btn-preview mr-lg-3 d-none d-lg-inline-block rounded-pill px-4 py-2">
                                Preview
                            </a>
                            <a href="${project.link}" class="btn btn-visit rounded-pill px-4 py-2"
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
