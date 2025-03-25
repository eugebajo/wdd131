// Get current year and last modified date 
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger Menu Toggle
const hamburgerButton = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburgerButton.addEventListener('click', function() {
    navMenu.classList.toggle('show');
});
