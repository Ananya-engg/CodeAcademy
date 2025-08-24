document.addEventListener('DOMContentLoaded', () => {
    // Particle config for Hero Section (particles-js)
    particlesJS('particles-js', {
        particles: { number: { value: 80, density: { enable: true, value_area: 800 } }, color: { value: '#ffffff' }, shape: { type: 'circle', stroke: { width: 0, color: '#000000' } }, opacity: { value: 0.5, random: false, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } }, size: { value: 3, random: true, anim: { enable: false } }, line_linked: { enable: false }, move: { enable: true, speed: 2.5, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: false } } },
        interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true }, modes: { repulse: { distance: 120, duration: 0.5 }, push: { particles_nb: 5 } } },
        retina_detect: true
    });

    // Particle config for About Us Section (particles-js-about)
    particlesJS('particles-js-about', {
        particles: { number: { value: 60, density: { enable: true, value_area: 800 } }, color: { value: '#00bfff' }, shape: { type: 'circle', stroke: { width: 0, color: '#000000' } }, opacity: { value: 0.4, random: false, anim: { enable: true, speed: 1.2, opacity_min: 0.1, sync: false } }, size: { value: 2, random: true, anim: { enable: false } }, line_linked: { enable: false }, move: { enable: true, speed: 1.8, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: false } } },
        interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true }, modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } } },
        retina_detect: true
    });

    // Particle config for Courses Section (particles-js-courses)
    particlesJS('particles-js-courses', {
        particles: { number: { value: 70, density: { enable: true, value_area: 800 } }, color: { value: '#4a90e2' }, shape: { type: 'circle', stroke: { width: 0, color: '#000000' } }, opacity: { value: 0.4, random: false, anim: { enable: true, speed: 1.5, opacity_min: 0.1, sync: false } }, size: { value: 2.5, random: true, anim: { enable: false } }, line_linked: { enable: false }, move: { enable: true, speed: 2, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: false } } },
        interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true }, modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } } },
        retina_detect: true
    });

    // Flip card functionality
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.course-card');
            if (card) card.classList.toggle('flipped');
        });
    });

    // Carousel navigation
    let currentIndex = 0;
    const cards = document.querySelectorAll('.course-card');
    const totalCards = cards.length;
    const visibleCards = 1; // Start with 1 for testing, adjust to 3 if needed
    const cardWidth = 330; // 300px width + 30px gap

    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const container = document.querySelector('.courses-container');

    if (prevBtn && nextBtn && container) {
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentIndex < totalCards - visibleCards) {
                currentIndex++;
                updateCarousel();
            }
        });

        function updateCarousel() {
            const offset = -currentIndex * cardWidth;
            container.style.transform = `translateX(${offset}px)`;
            container.style.transition = 'transform 0.5s ease';
        }
    } else {
        console.error('Navigation buttons or container not found. Check HTML structure.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Particle config for Hero Section (particles-js)
    particlesJS('particles-js', {
        particles: { number: { value: 80, density: { enable: true, value_area: 800 } }, color: { value: '#ffffff' }, shape: { type: 'circle', stroke: { width: 0, color: '#000000' } }, opacity: { value: 0.5, random: false, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } }, size: { value: 3, random: true, anim: { enable: false } }, line_linked: { enable: false }, move: { enable: true, speed: 2.5, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: false } } },
        interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true }, modes: { repulse: { distance: 120, duration: 0.5 }, push: { particles_nb: 5 } } },
        retina_detect: true
    });

    // Particle config for About Us Section (particles-js-about)
    particlesJS('particles-js-about', {
        particles: { number: { value: 60, density: { enable: true, value_area: 800 } }, color: { value: '#00bfff' }, shape: { type: 'circle', stroke: { width: 0, color: '#000000' } }, opacity: { value: 0.4, random: false, anim: { enable: true, speed: 1.2, opacity_min: 0.1, sync: false } }, size: { value: 2, random: true, anim: { enable: false } }, line_linked: { enable: false }, move: { enable: true, speed: 1.8, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: false } } },
        interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true }, modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } } },
        retina_detect: true
    });

    // Particle config for Courses Section (particles-js-courses)
    particlesJS('particles-js-courses', {
        particles: { number: { value: 70, density: { enable: true, value_area: 800 } }, color: { value: '#4a90e2' }, shape: { type: 'circle', stroke: { width: 0, color: '#000000' } }, opacity: { value: 0.4, random: false, anim: { enable: true, speed: 1.5, opacity_min: 0.1, sync: false } }, size: { value: 2.5, random: true, anim: { enable: false } }, line_linked: { enable: false }, move: { enable: true, speed: 2, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: false } } },
        interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true }, modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } } },
        retina_detect: true
    });

    // Particle config for Special Programs Section (particles-js-programs)
    particlesJS('particles-js-programs', {
        particles: { number: { value: 65, density: { enable: true, value_area: 800 } }, color: { value: '#ff6347' }, shape: { type: 'circle', stroke: { width: 0, color: '#000000' } }, opacity: { value: 0.4, random: false, anim: { enable: true, speed: 1.3, opacity_min: 0.1, sync: false } }, size: { value: 2.2, random: true, anim: { enable: false } }, line_linked: { enable: false }, move: { enable: true, speed: 1.9, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: false } } },
        interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true }, modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } } },
        retina_detect: true
    });

    // Flip card functionality for Courses
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.course-card');
            if (card) card.classList.toggle('flipped');
        });
    });

    // Flip card functionality for Special Programs
    document.querySelectorAll('.learn-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.program-card');
            if (card) card.classList.toggle('flipped');
        });
    });

    // Carousel navigation for Courses
    let currentIndexCourses = 0;
    const cardsCourses = document.querySelectorAll('.course-card');
    const totalCardsCourses = cardsCourses.length;
    const visibleCardsCourses = 1; // Adjust to 3 for three visible
    const cardWidthCourses = 330;

    const prevBtnCourses = document.querySelector('.courses .prev-btn');
    const nextBtnCourses = document.querySelector('.courses .next-btn');
    const containerCourses = document.querySelector('.courses-container');

    if (prevBtnCourses && nextBtnCourses && containerCourses) {
        prevBtnCourses.addEventListener('click', () => {
            if (currentIndexCourses > 0) {
                currentIndexCourses--;
                updateCarousel('courses');
            }
        });

        nextBtnCourses.addEventListener('click', () => {
            if (currentIndexCourses < totalCardsCourses - visibleCardsCourses) {
                currentIndexCourses++;
                updateCarousel('courses');
            }
        });
    }

    // Carousel navigation for Special Programs
    let currentIndexPrograms = 0;
    const cardsPrograms = document.querySelectorAll('.program-card');
    const totalCardsPrograms = cardsPrograms.length;
    const visibleCardsPrograms = 1; // Adjust to 3 for three visible
    const cardWidthPrograms = 330;

    const prevBtnPrograms = document.querySelector('.special-programs .prev-btn');
    const nextBtnPrograms = document.querySelector('.special-programs .next-btn');
    const containerPrograms = document.querySelector('.programs-container');

    if (prevBtnPrograms && nextBtnPrograms && containerPrograms) {
        prevBtnPrograms.addEventListener('click', () => {
            if (currentIndexPrograms > 0) {
                currentIndexPrograms--;
                updateCarousel('programs');
            }
        });

        nextBtnPrograms.addEventListener('click', () => {
            if (currentIndexPrograms < totalCardsPrograms - visibleCardsPrograms) {
                currentIndexPrograms++;
                updateCarousel('programs');
            }
        });
    }

    function updateCarousel(section) {
        const currentIndex = section === 'courses' ? currentIndexCourses : currentIndexPrograms;
        const container = section === 'courses' ? containerCourses : containerPrograms;
        const cardWidth = section === 'courses' ? cardWidthCourses : cardWidthPrograms;
        const offset = -currentIndex * cardWidth;
        container.style.transform = `translateX(${offset}px)`;
        container.style.transition = 'transform 0.5s ease';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Particle config for Hero Section (particles-js)
    particlesJS('particles-js', {
        particles: { number: { value: 80, density: { enable: true, value_area: 800 } }, color: { value: '#ffffff' }, shape: { type: 'circle', stroke: { width: 0, color: '#000000' } }, opacity: { value: 0.5, random: false, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } }, size: { value: 3, random: true, anim: { enable: false } }, line_linked: { enable: false }, move: { enable: true, speed: 2.5, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: false } } },
        interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true }, modes: { repulse: { distance: 120, duration: 0.5 }, push: { particles_nb: 5 } } },
        retina_detect: true
    });

    // Particle config for About Us Section (particles-js-about)
    particlesJS('particles-js-about', {
        particles: { number: { value: 60, density: { enable: true, value_area: 800 } }, color: { value: '#00bfff' }, shape: { type: 'circle', stroke: { width: 0, color: '#000000' } }, opacity: { value: 0.4, random: false, anim: { enable: true, speed: 1.2, opacity_min: 0.1, sync: false } }, size: { value: 2, random: true, anim: { enable: false } }, line_linked: { enable: false }, move: { enable: true, speed: 1.8, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: false } } },
        interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true }, modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } } },
        retina_detect: true
    });

    // Particle config for Courses Section (particles-js-courses)
    particlesJS('particles-js-courses', {
        particles: { number: { value: 70, density: { enable: true, value_area: 800 } }, color: { value: '#4a90e2' }, shape: { type: 'circle', stroke: { width: 0, color: '#000000' } }, opacity: { value: 0.4, random: false, anim: { enable: true, speed: 1.5, opacity_min: 0.1, sync: false } }, size: { value: 2.5, random: true, anim: { enable: false } }, line_linked: { enable: false }, move: { enable: true, speed: 2, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: false } } },
        interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true }, modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } } },
        retina_detect: true
    });

    // Particle config for Special Programs Section (particles-js-programs)
    particlesJS('particles-js-programs', {
        particles: { number: { value: 65, density: { enable: true, value_area: 800 } }, color: { value: '#ff6347' }, shape: { type: 'circle', stroke: { width: 0, color: '#000000' } }, opacity: { value: 0.4, random: false, anim: { enable: true, speed: 1.3, opacity_min: 0.1, sync: false } }, size: { value: 2.2, random: true, anim: { enable: false } }, line_linked: { enable: false }, move: { enable: true, speed: 1.9, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: false } } },
        interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true }, modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } } },
        retina_detect: true
    });

    // Particle config for Student Reviews Section (particles-js-reviews)
    particlesJS('particles-js-reviews', {
        particles: { number: { value: 80, density: { enable: true, value_area: 800 } }, color: { value: '#00ffff' }, shape: { type: 'circle', stroke: { width: 1, color: '#00ffcc' } }, opacity: { value: 0.6, random: true, anim: { enable: true, speed: 1.5, opacity_min: 0.2, sync: false } }, size: { value: 3, random: true, anim: { enable: true, size_min: 1, speed: 2 } }, line_linked: { enable: true, distance: 100, color: '#ff00ff', opacity: 0.3, width: 1 }, move: { enable: true, speed: 2.5, direction: 'top', random: false, straight: true, out_mode: 'out', bounce: false, attract: { enable: false } } },
        interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'repulse' }, resize: true }, modes: { grab: { distance: 150, line_linked: { opacity: 0.5 } }, repulse: { distance: 120, duration: 0.5 } } },
        retina_detect: true
    });

    // Flip card functionality for Courses
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.course-card');
            if (card) card.classList.toggle('flipped');
        });
    });

    // Flip card functionality for Special Programs
    document.querySelectorAll('.learn-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.program-card');
            if (card) card.classList.toggle('flipped');
        });
    });

    // Carousel navigation for Courses
    let currentIndexCourses = 0;
    const cardsCourses = document.querySelectorAll('.course-card');
    const totalCardsCourses = cardsCourses.length;
    const visibleCardsCourses = 1;
    const cardWidthCourses = 330;

    const prevBtnCourses = document.querySelector('.courses .prev-btn');
    const nextBtnCourses = document.querySelector('.courses .next-btn');
    const containerCourses = document.querySelector('.courses-container');

    if (prevBtnCourses && nextBtnCourses && containerCourses) {
        prevBtnCourses.addEventListener('click', () => {
            if (currentIndexCourses > 0) {
                currentIndexCourses--;
                updateCarousel('courses');
            }
        });

        nextBtnCourses.addEventListener('click', () => {
            if (currentIndexCourses < totalCardsCourses - visibleCardsCourses) {
                currentIndexCourses++;
                updateCarousel('courses');
            }
        });
    }

    // Carousel navigation for Special Programs
    let currentIndexPrograms = 0;
    const cardsPrograms = document.querySelectorAll('.program-card');
    const totalCardsPrograms = cardsPrograms.length;
    const visibleCardsPrograms = 1;
    const cardWidthPrograms = 330;

    const prevBtnPrograms = document.querySelector('.special-programs .prev-btn');
    const nextBtnPrograms = document.querySelector('.special-programs .next-btn');
    const containerPrograms = document.querySelector('.programs-container');

    if (prevBtnPrograms && nextBtnPrograms && containerPrograms) {
        prevBtnPrograms.addEventListener('click', () => {
            if (currentIndexPrograms > 0) {
                currentIndexPrograms--;
                updateCarousel('programs');
            }
        });

        nextBtnPrograms.addEventListener('click', () => {
            if (currentIndexPrograms < totalCardsPrograms - visibleCardsPrograms) {
                currentIndexPrograms++;
                updateCarousel('programs');
            }
        });
    }

    // Animated Review Carousel
    let currentIndexReviews = 0;
    const reviewCards = document.querySelectorAll('.review-card');
    const totalReviews = reviewCards.length;
    const navDots = document.querySelector('.nav-dots');

    // Create navigation dots
    for (let i = 0; i < totalReviews; i++) {
        const dot = document.createElement('div');
        dot.classList.add('nav-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndexReviews = i;
            updateReviewCarousel();
        });
        navDots.appendChild(dot);
    }

    function updateReviewCarousel() {
        reviewCards.forEach((card, index) => {
            card.classList.remove('active', 'leaving');
            const dot = navDots.children[index];
            dot.classList.remove('active');
            if (index === currentIndexReviews) {
                card.classList.add('active');
                dot.classList.add('active');
            } else if (index === (currentIndexReviews - 1 + totalReviews) % totalReviews) {
                card.classList.add('leaving');
            }
        });
    }

    function nextReview() {
        const prevIndex = currentIndexReviews;
        currentIndexReviews = (currentIndexReviews + 1) % totalReviews;
        updateReviewCarousel();
        // Trigger reflow to ensure animation
        reviewCards[prevIndex].style.transform = 'translateY(-100%)';
        reviewCards[currentIndexReviews].style.transform = 'translateY(0)';
    }

    // Auto-slide every 5 seconds
    setInterval(nextReview, 5000);

    // Initial display
    updateReviewCarousel();
});

function updateCarousel(section) {
    const currentIndex = section === 'courses' ? currentIndexCourses : currentIndexPrograms;
    const container = section === 'courses' ? containerCourses : containerPrograms;
    const cardWidth = section === 'courses' ? cardWidthCourses : cardWidthPrograms;
    const offset = -currentIndex * cardWidth;
    container.style.transform = `translateX(${offset}px)`;
    container.style.transition = 'transform 0.5s ease';
}

document.addEventListener('DOMContentLoaded', () => {
    // Particle config for Contact Us Section
    particlesJS('particles-js-contact', {
        particles: { number: { value: 80, density: { enable: true, value_area: 800 } }, color: { value: '#00ffff' }, shape: { type: 'circle', stroke: { width: 1, color: '#00ffcc' } }, opacity: { value: 0.6, random: true, anim: { enable: true, speed: 1.5, opacity_min: 0.2, sync: false } }, size: { value: 3, random: true, anim: { enable: true, size_min: 1, speed: 2 } }, line_linked: { enable: true, distance: 100, color: '#ff00ff', opacity: 0.3, width: 1 }, move: { enable: true, speed: 2.5, direction: 'top', random: false, straight: true, out_mode: 'out', bounce: false, attract: { enable: false } } },
        interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'repulse' }, resize: true }, modes: { grab: { distance: 150, line_linked: { opacity: 0.5 } }, repulse: { distance: 120, duration: 0.5 } } },
        retina_detect: true
    });

    // Flip card functionality for Courses
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.course-card');
            if (card) card.classList.toggle('flipped');
        });
    });

    // Flip card functionality for Special Programs
    document.querySelectorAll('.learn-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.program-card');
            if (card) card.classList.toggle('flipped');
        });
    });

    // Carousel navigation for Courses
    let currentIndexCourses = 0;
    const cardsCourses = document.querySelectorAll('.course-card');
    const totalCardsCourses = cardsCourses.length;
    const visibleCardsCourses = 1;
    const cardWidthCourses = 330;

    const prevBtnCourses = document.querySelector('.courses .prev-btn');
    const nextBtnCourses = document.querySelector('.courses .next-btn');
    const containerCourses = document.querySelector('.courses-container');

    if (prevBtnCourses && nextBtnCourses && containerCourses) {
        prevBtnCourses.addEventListener('click', () => {
            if (currentIndexCourses > 0) {
                currentIndexCourses--;
                updateCarousel('courses');
            }
        });

        nextBtnCourses.addEventListener('click', () => {
            if (currentIndexCourses < totalCardsCourses - visibleCardsCourses) {
                currentIndexCourses++;
                updateCarousel('courses');
            }
        });
    }

    // Carousel navigation for Special Programs
    let currentIndexPrograms = 0;
    const cardsPrograms = document.querySelectorAll('.program-card');
    const totalCardsPrograms = cardsPrograms.length;
    const visibleCardsPrograms = 1;
    const cardWidthPrograms = 330;

    const prevBtnPrograms = document.querySelector('.special-programs .prev-btn');
    const nextBtnPrograms = document.querySelector('.special-programs .next-btn');
    const containerPrograms = document.querySelector('.programs-container');

    if (prevBtnPrograms && nextBtnPrograms && containerPrograms) {
        prevBtnPrograms.addEventListener('click', () => {
            if (currentIndexPrograms > 0) {
                currentIndexPrograms--;
                updateCarousel('programs');
            }
        });

        nextBtnPrograms.addEventListener('click', () => {
            if (currentIndexPrograms < totalCardsPrograms - visibleCardsPrograms) {
                currentIndexPrograms++;
                updateCarousel('programs');
            }
        });
    }

    // Animated Review Carousel
    let currentIndexReviews = 0;
    const reviewCards = document.querySelectorAll('.review-card');
    const totalReviews = reviewCards.length;
    const navDots = document.querySelector('.nav-dots');

    // Create navigation dots
    for (let i = 0; i < totalReviews; i++) {
        const dot = document.createElement('div');
        dot.classList.add('nav-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndexReviews = i;
            updateReviewCarousel();
        });
        navDots.appendChild(dot);
    }

    function updateReviewCarousel() {
        reviewCards.forEach((card, index) => {
            card.classList.remove('active', 'leaving');
            const dot = navDots.children[index];
            dot.classList.remove('active');
            if (index === currentIndexReviews) {
                card.classList.add('active');
                dot.classList.add('active');
            } else if (index === (currentIndexReviews - 1 + totalReviews) % totalReviews) {
                card.classList.add('leaving');
            }
        });
    }

    function nextReview() {
        const prevIndex = currentIndexReviews;
        currentIndexReviews = (currentIndexReviews + 1) % totalReviews;
        updateReviewCarousel();
        // Trigger reflow to ensure animation
        reviewCards[prevIndex].style.transform = 'translateY(-100%)';
        reviewCards[currentIndexReviews].style.transform = 'translateY(0)';
    }

    // Auto-slide every 5 seconds
    setInterval(nextReview, 5000);

    // Initial display
    updateReviewCarousel();

    // Form validation
    document.querySelector('.contact-form form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (name && email && message) {
            alert('Thank you for your message! We will get back to you soon.');
            e.target.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});

function updateCarousel(section) {
    const currentIndex = section === 'courses' ? currentIndexCourses : currentIndexPrograms;
    const container = section === 'courses' ? containerCourses : containerPrograms;
    const cardWidth = section === 'courses' ? cardWidthCourses : cardWidthPrograms;
    const offset = -currentIndex * cardWidth;
    container.style.transform = `translateX(${offset}px)`;
    container.style.transition = 'transform 0.5s ease';
}