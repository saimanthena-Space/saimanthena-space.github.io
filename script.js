// Enhanced Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Dynamic Nav Styling
const sections = document.querySelectorAll('section');
const options = {
    rootMargin: '-100px 0px 0px 0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            nav.classList.remove('nav-scroll', 'nav-skills');
            
            if (sectionId === 'skills') {
                nav.classList.add('nav-skills');
            } else if (sectionId !== 'about') {
                nav.classList.add('nav-scroll');
            }
        }
    });
}, options);

sections.forEach(section => observer.observe(section));

// Smooth Scroll Offset Fix
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 70;
        
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });
    });
    
});
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const heroHeight = document.querySelector('.hero').offsetHeight;
    const nav = document.querySelector('.nav');

    // Toggle scroll class for hero section
    if (currentScroll > heroHeight - 100) {
        nav.classList.add('nav-scroll');
    } else {
        nav.classList.remove('nav-scroll');
    }

    // Section-based color changes
    const skillsSection = document.querySelector('#skills');
    const skillsPosition = skillsSection.offsetTop - 100;
    
    if (currentScroll >= skillsPosition) {
        nav.classList.add('nav-skills');
    } else {
        nav.classList.remove('nav-skills');
    }

    lastScroll = currentScroll;
});

// Ensure smooth scroll offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 80; // Match your nav height
        
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});
