document.addEventListener("DOMContentLoaded", function() {
    // 1. Cambio de color en la navbar al hacer scroll
    window.addEventListener("scroll", function() {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 2. Animación de elementos al hacer scroll
    const elements = document.querySelectorAll(".fade-in-text, .fade-in-img");
    function scrollAnimation() {
        elements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
                el.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", scrollAnimation);
    scrollAnimation();

    // 3. Desplazamiento suave en el menú
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // 4. Botón "Volver arriba"
    let backToTop = document.createElement("button");
    backToTop.innerHTML = "⬆";
    backToTop.classList.add("back-to-top");
    document.body.appendChild(backToTop);

    Object.assign(backToTop.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "none",
        backgroundColor: "#16403a",
        color: "white",
        fontSize: "20px",
        cursor: "pointer",
        display: "none",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "opacity 0.3s ease-in-out"
    });

    backToTop.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function() {
        backToTop.style.display = window.scrollY > 100 ? "block" : "none";
    });

    // 5. Efecto de clic en botones
    document.querySelectorAll(".btn").forEach(btn => {
        btn.addEventListener("mousedown", function() {
            this.classList.add("clicked");
        });
        btn.addEventListener("mouseup", function() {
            this.classList.remove("clicked");
        });
    });

    // 6. Animación de entrada en todas las secciones con fade-in effect
    document.querySelectorAll(".about, .services, .testimonials, .contact").forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";

        function animateSection() {
            if (section.getBoundingClientRect().top < window.innerHeight * 0.9) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        }
        
        window.addEventListener("scroll", animateSection);
        animateSection();
    });

    // 7. INICIALIZAR `Owl Carousel` PARA TESTIMONIOS  
    if (typeof jQuery !== "undefined") {
        $(document).ready(function() {
            if ($(".testimonials .owl-carousel").length > 0) {
                $(".testimonials .owl-carousel").owlCarousel({
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    items: 1,
                    margin: 30,
                    dots: true,
                    nav: false
                });
                console.log("Owl Carousel inicializado correctamente.");
            } else {
                console.warn("⚠️ No se encontró el carrusel de testimonios.");
            }
        });
    } else {
        console.error("jQuery no está cargado. Verifica la inclusión de jQuery en tu HTML.");
    }
});

// 8. Scroll
$(function () {
    $.scrollIt({
      easing: 'swing',
      scrollTime: 900,
      activeClass: 'active',
      topOffset: -63
    });
  });

  // 8. Scroll con log en consola + ScrollSpy activo
$(function () {
    $.scrollIt({
      easing: 'swing',
      scrollTime: 900,
      activeClass: 'active',
      topOffset: -63,
      onPageChange: function(index) {
        console.log("Sección visible:", index);
      }
    });
  
    // Destacar visualmente la sección activa en el menú
    const navLinks = document.querySelectorAll('.nav-link[data-scroll-nav]');
    
    window.addEventListener('scroll', function () {
      let currentSection = -1;
      document.querySelectorAll('[data-scroll-index]').forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight * 0.3) {
          currentSection = index;
        }
      });
  
      navLinks.forEach(link => {
        const index = link.getAttribute('data-scroll-nav');
        if (parseInt(index) === currentSection) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    });
  });
  