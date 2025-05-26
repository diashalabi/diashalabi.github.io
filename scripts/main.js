$(document).ready(function() {

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
            name: 'JavaScript',
            percentage: 85,
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
            name: 'VueJS',
            percentage: 85,
        },
        {
            name: 'AngularJS',
            percentage: 80,
        },
        {
            name: 'React',
            percentage: 85,
        },
        {
            name: 'Node.js',
            percentage: 80,
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
