

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu-items");
  const openIcon = document.getElementById("open-icon");
  const closeIcon = document.getElementById("close-icon");

  menuButton.addEventListener("click", function () {
    const isHidden = mobileMenu.classList.contains("hidden");

    if (isHidden) {
      // Mostrar menú
      mobileMenu.classList.remove("hidden");
      mobileMenu.style.maxHeight = "1000px"; // Puedes ajustar este valor
      openIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
      menuButton.setAttribute("aria-expanded", "true");
    } else {
      // Ocultar menú
      mobileMenu.style.maxHeight = "0";
      mobileMenu.classList.add("hidden");
      openIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
});

//banner de cookies

document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  const rejectBtn = document.getElementById('reject-cookies');

  const userConsent = localStorage.getItem('cookieConsent');

  if (!userConsent) {
    banner.classList.remove('hidden');
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    banner.classList.add('hidden');
    // Aquí puedes activar scripts de analítica o seguimiento
  });

  rejectBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'rejected');
    banner.classList.add('hidden');
    // Aquí puedes bloquear cookies no esenciales
  });
});


// contacto form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contact-form");
  const mensajeExito = document.querySelector("#mensaje-exito");
  const botonNuevo = document.querySelector("#nuevo-mensaje");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const datos = new FormData(form);
    fetch("https://formsubmit.co/ajax/siysiottm@gmail.com", {
      method: "POST",
      body: datos
    })
    .then(response => {
      if (response.ok) {
        mensajeExito.classList.remove("hidden");
        mensajeExito.classList.add("visible");
        form.reset();
      } else {
        alert("Hubo un problema al enviar tu mensaje. Intenta nuevamente.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Error al enviar el formulario.");
    });
  });

  botonNuevo.addEventListener("click", function () {
    mensajeExito.classList.remove("visible");
    setTimeout(() => {
      mensajeExito.classList.add("hidden");
    }, 600);
  });
});