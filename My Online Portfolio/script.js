document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("myHeader");
    var nav = header.querySelector("nav");
  
    nav.addEventListener("click", function() {
        header.style.backgroundColor = "rgba(220, 220, 220, 0)";
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav a");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        event.preventDefault();
        
        navLinks.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
        
        document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: 'smooth' });
      });
    });
  });

const darkModeToggle = document.getElementById('darkModeToggle');
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Initialize dark mode state
let isDarkMode = prefersDarkMode;
function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark', isDarkMode);
}

darkModeToggle.addEventListener('click', toggleDarkMode);

toggleDarkMode();

// Get all navigation links
const navLinks = document.querySelectorAll('.nav a');

// Add event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', playAnimation);
});

/*function playAnimation(event) {
  event.preventDefault();
  
  // Get the href of the clicked link
  const href = this.getAttribute('href');

  // Get the target element by its ID
  const target = document.querySelector(href);

  // Add a class to trigger the animation
  target.classList.add('slide-in-animation');

  // Remove the class after the animation is complete
  target.addEventListener('animationend', () => {
    target.classList.remove('slide-in-animation');
  });
}*/


