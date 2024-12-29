// Smooth Scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to Top Button functionality
let scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.id = 'scrollToTopBtn';
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '20px';
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.display = 'none';
scrollToTopBtn.style.padding = '10px';
scrollToTopBtn.style.backgroundColor = '#333';
scrollToTopBtn.style.color = '#fff';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.borderRadius = '50%';
scrollToTopBtn.style.cursor = 'pointer';
document.body.appendChild(scrollToTopBtn);

window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dynamic Skill Progress Bar (example with a progress bar for Java)
const skills = document.querySelectorAll('#skills-react li');
skills.forEach(skill => {
    let skillLevel = 70; // Example: Set the progress level for each skill
    let progressBar = document.createElement('div');
    progressBar.style.width = skillLevel + '%';
    progressBar.style.height = '10px';
    progressBar.style.backgroundColor = '#4CAF50';
    progressBar.style.borderRadius = '5px';
    progressBar.style.marginTop = '5px';
    skill.appendChild(progressBar);
});

// Interactive Project Modal (if you want to show details of projects when clicked)
const projects = document.querySelectorAll('.project-item');
projects.forEach(project => {
    project.addEventListener('click', function() {
        alert('Project details coming soon!');  // Replace this with modal code for a more detailed view
    });
});

// Simple Form Validation (you can add a contact form and validate)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        let email = document.querySelector('input[type="email"]').value;
        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            e.preventDefault();
        }
    });
});
// Toggle light/dark mode
document.getElementById('mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
