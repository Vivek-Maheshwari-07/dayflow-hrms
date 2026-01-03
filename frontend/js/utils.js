// Theme Handling
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

// Check Local Storage for saved theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeToggleBtn.innerText = '☀️ Light Mode';
    }
}

// Toggle Event
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggleBtn.innerText = '🌙 Dark Mode';
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.innerText = '☀️ Light Mode';
        }
    });
}