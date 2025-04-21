// Navigation Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            navLinks.classList.remove('show');
        }
    });
});

// Skills animation
const skillsContainer = document.querySelector('.skills-container');
if (skillsContainer) {
    const skills = skillsContainer.dataset.skills ? JSON.parse(skillsContainer.dataset.skills) : [];
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.classList.add('skill-item');
        skillItem.textContent = skill;
        skillsContainer.appendChild(skillItem);
    });
}

// Intersection Observer for Fade-in Animation
const fadeInSections = document.querySelectorAll('section');
const fadeInOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Add CSS for fade animations
const fadeStyle = document.createElement('style');
fadeStyle.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(fadeStyle);

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, fadeInOptions);

fadeInSections.forEach(section => {
    section.classList.add('fade-in');
    fadeInObserver.observe(section);
});

// Navbar Scroll Effect
const navbar = document.querySelector('nav');
let lastScroll = 0;

// Add CSS for navbar scroll effect
const navStyle = document.createElement('style');
navStyle.textContent = `
    nav {
        transition: transform 0.3s ease-in-out;
    }
    nav.nav-hidden {
        transform: translateY(-100%);
    }
`;
document.head.appendChild(navStyle);

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('nav-hidden');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('nav-hidden')) {
        navbar.classList.add('nav-hidden');
    } else if (currentScroll < lastScroll && navbar.classList.contains('nav-hidden')) {
        navbar.classList.remove('nav-hidden');
    }
    
    lastScroll = currentScroll;
});

// Glitch Effect Enhancement
const glitchText = document.querySelector('.glitch-text');
if (glitchText) {
    setInterval(() => {
        if (Math.random() > 0.95) {
            glitchText.style.textShadow = `
                ${Math.random() * 3}px ${Math.random() * 3}px ${Math.random() * 3}px rgba(0,255,255,0.7),
                ${Math.random() * -3}px ${Math.random() * 3}px ${Math.random() * 3}px rgba(255,0,255,0.7)
            `;
            setTimeout(() => {
                glitchText.style.textShadow = 'none';
            }, 50);
        }
    }, 100);
}

// Project Cards Hover Effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = (x / rect.width - 0.5) * 20;
        const yPercent = (y / rect.height - 0.5) * 20;
        
        card.style.transform = `perspective(1000px) rotateY(${xPercent}deg) rotateX(${-yPercent}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
    });
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const html = document.documentElement;
        const icon = themeToggle.querySelector('i');
        
        // Toggle theme
        const isDark = html.getAttribute('data-theme') === 'dark';
        html.setAttribute('data-theme', isDark ? 'light' : 'dark');
        
        // Toggle icon
        icon.classList.toggle('fa-sun');
        icon.classList.toggle('fa-moon');
        
        // Save preference
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });
    
    // Set initial theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Set initial icon
    const icon = themeToggle.querySelector('i');
    if (savedTheme === 'dark') {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
} 