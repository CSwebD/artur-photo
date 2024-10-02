// Select all content sections
const sections = document.querySelectorAll('.content');

// Function to hide all sections
function hideAllSections() {
    sections.forEach(section => {
        section.style.display = 'none';
        section.style.opacity = '0';
    });
}

// Show section by id
function showSection(id) {
    const section = document.querySelector(id);
    if (section) {
        section.style.display = 'block';
        setTimeout(() => section.style.opacity = '1', 100); // Smooth transition
    }
}

// Add event listeners to links in the nav
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        hideAllSections();
        showSection(this.getAttribute('href'));
        
        // Only close the nav menu if on mobile
        if (window.innerWidth < 768) {
            const navMenu = document.getElementById('navMenu');
            navMenu.style.display = 'none';
        }
    });
});

// On page load, show the portfolio (home) section
document.addEventListener('DOMContentLoaded', () => {
    showSection('#portfolio');
});

// Toggle the navigation menu on mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'flex';
    }
});
