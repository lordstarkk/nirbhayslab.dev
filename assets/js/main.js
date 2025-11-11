// Small interactions, theme toggle

document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    const htmlElement = document.documentElement;
    const isDark = localStorage.getItem('theme') === 'dark' || 
                   (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
        htmlElement.classList.add('dark');
    }
});

// Theme toggle function
function toggleTheme() {
    const htmlElement = document.documentElement;
    const isDark = htmlElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
