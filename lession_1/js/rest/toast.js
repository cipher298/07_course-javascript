const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const main = $(".toast");
const successBtn = $(".btn__success");
const errorBtn = $(".btn__error");

function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  if (main) {
    const toast = document.createElement("div");

    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    // Remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    const icons = {
      success: "fas fa-check-circle",
      info: "fas fa-info-circle",
      warning: "fas fa-exclamation-circle",
      error: "fas fa-exclamation-circle",
    };
    const icon = icons[type];

    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast__${type}`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML = `<div class="toast__pannel toast__${type}">
        <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h4 class="toast__title">${title}</h4>
            <p class="toast__message">${message} </div>
        <div class="toast__icon toast__close">
            <i class="fa-solid fa-xmark"></i>
        </div>
                        </div>`;
    main.appendChild(toast);
  }
}

function showSuccess() {
  toast({
    title: "AAAAAAAA",
    message: "AAAAAAAAAAA",
    type: "success",
    duration: 3000,
  });
}

function showError() {
  toast({
    title: "AAAAAAAA",
    message: "AAAAAAAAAAA",
    type: "error",
    duration: 3000,
  });
}
