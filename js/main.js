// navbar properties
// EXPERIMENTAL
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.transition = "background-color 0.5s ease";
    navbar.style.backgroundColor = "#403D38";
  } else {
    navbar.style.transition = "background-color 0.5s ease";
    navbar.style.backgroundColor = "transparent";
  }
});

// dot moving downwards in mouse
// EXPERIMENTAL
document.addEventListener("DOMContentLoaded", () => {
  const dot = document.querySelector(".dot");
  if (dot) {
    setInterval(() => {
      dot.style.transition = "transform 2s, opacity 2s";
      dot.style.transform = "translateY(20px)";
      dot.style.opacity = "0";
      setTimeout(() => {
        dot.style.transition = "transform 0s, opacity 0s";
        dot.style.transform = "translateY(0)";
        dot.style.opacity = "1";
      }, 2000);
    }, 4000);
  }
});
