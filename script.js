// script.js - Adds interactivity and scroll animations.

document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    // Observe reveal elements
    const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');
    revealElements.forEach(el => observer.observe(el));

    // Dynamic mouse parallax on hero image
    const heroImage = document.getElementById('hero-img');
    const heroSection = document.getElementById('collection');

    if (heroSection && heroImage) {
        heroSection.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            
            heroImage.style.transform = `rotate(-15deg) translate(${xAxis}px, ${yAxis}px)`;
        });

        heroSection.addEventListener('mouseleave', () => {
            heroImage.style.transform = `rotate(-15deg) translate(0px, 0px)`;
        });
    }
});
