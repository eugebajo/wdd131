// Increment review count in localStorage
let count = Number(localStorage.getItem("reviewCount")) || 0;
count++;
localStorage.setItem("reviewCount", count);

// Display it
document.getElementById("reviewCount").textContent = count;

// Footer info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modDate").textContent = document.lastModified;
