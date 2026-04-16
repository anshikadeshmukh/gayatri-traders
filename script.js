document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = toggleBtn.querySelector('i');

    toggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.replace('dark-mode', 'light-mode');
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            body.classList.replace('light-mode', 'dark-mode');
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    // Intersection Observer for Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "0.8s ease-out";
        observer.observe(section);
    });
});