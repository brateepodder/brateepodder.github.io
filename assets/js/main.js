/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// function for "Made With" dropdown
document.addEventListener('DOMContentLoaded', (event) => {
    const toggles = document.querySelectorAll('.made-with-toggle');
    toggles.forEach(toggle => {
        const content = toggle.nextElementSibling;
        const arrow = toggle.querySelector('.arrow');

        toggle.addEventListener('click', () => {
            const isOpen = content.classList.contains('open');

            if (isOpen) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }

            content.classList.toggle('open');
            arrow.classList.toggle('rotate', !isOpen);
			toggle.classList.toggle('open', !isOpen);
        });
    });
});

function showLeadershipDescription(id) {
    var container = document.getElementById('leadership-description-container');
    var descriptions = container.getElementsByClassName('dropdown-content');

    // Get the current description element
    var currentDesc = document.getElementById(id);

    // Check if the current description is already open
    var isOpen = currentDesc.classList.contains('open');

    // Hide all descriptions
    for (var i = 0; i < descriptions.length; i++) {
        descriptions[i].classList.remove('open');
    }
	// container.classList.remove('open');

    // If the current description was not open, open it
    if (!isOpen) {
        currentDesc.classList.add('open');
		container.classList.add('open');
        container.style.display = 'block';
    } else {
        // If the current description was open, hide the container
        container.classList.remove('open');
		currentDesc.classList.remove('open');
    }
}

function showEndeavorsDescription(id) {
    var container = document.getElementById('endeavors-description-container');
    var descriptions = container.getElementsByClassName('dropdown-content');
    var currentDesc = document.getElementById(id);
    var isOpen = currentDesc.classList.contains('open');

    for (var i = 0; i < descriptions.length; i++) {
        descriptions[i].classList.remove('open');
    }

    if (!isOpen) {
        currentDesc.classList.add('open');
		container.classList.add('open');
        container.style.display = 'block';
    } else {
        container.classList.remove('open');
		currentDesc.classList.remove('open');
    }
}

function showOrganizationDescription(id) {
    var container = document.getElementById('organization-description-container');
    var descriptions = container.getElementsByClassName('dropdown-content');
    var currentDesc = document.getElementById(id);
    var isOpen = currentDesc.classList.contains('open');

    for (var i = 0; i < descriptions.length; i++) {
        descriptions[i].classList.remove('open');
    }

    if (!isOpen) {
        currentDesc.classList.add('open');
		container.classList.add('open');
        container.style.display = 'block';
    } else {
        container.classList.remove('open');
		currentDesc.classList.remove('open');
    }
}


(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// Main Sections: Two.

		// Lightbox gallery.
			$window.on('load', function() {

				$('#two').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				});

			});

})(jQuery);