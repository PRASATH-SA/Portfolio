// Smooth scroll animation
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Neon hover glow on cards
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    card.style.boxShadow = `${(x / width) * 40}px ${(y / height) * 40}px 40px #00ffe0`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 0 20px #00ffe0";
  });
});
