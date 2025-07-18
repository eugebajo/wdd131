let count = localStorage.getItem("reviewCount") || 0;
count++;
localStorage.setItem("reviewCount", count);

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("counter").textContent = count;
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("modDate").textContent = document.lastModified;
});
