// menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const areaMenu = document.getElementById("area-menu");

  menuToggle.addEventListener("click", () => {
    areaMenu.classList.toggle("show");
  });
});

// carregamento rolagem
document.addEventListener("DOMContentLoaded", function () {
  const posts = document.querySelectorAll(".postagem");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visivel");
          observer.unobserve(entry.target); 
        }
      });
    },
    { threshold: 0.3 } 
  );

  posts.forEach((post) => {
    observer.observe(post);
  });
});

// carregamento menu lateral
document.addEventListener("DOMContentLoaded", function () {
  const areaLateral = document.getElementById("area-lateral");

  function checkScroll() {
    const triggerPoint = window.innerHeight * 0.75; 
    const posicao = areaLateral.getBoundingClientRect().top;

    if (posicao < triggerPoint) {
      areaLateral.classList.add("show");
    }
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); 
});