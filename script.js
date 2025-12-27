// Get the mobile menu button and menu container elements
const btn = document.getElementById('mobileMenuBtn');
const menu = document.getElementById('mobileMenu');

// Toggle the menu visibility when the button is clicked
btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close the menu automatically when a link is clicked
menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove('active');
    });
});
