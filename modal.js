function openModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden"; // block main page scroll
}

function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = ""; // unblock main page scroll
}

function modal(modalSelector, triggerSelector) {
  const modal = document.querySelector(modalSelector),
    modalTrigger = document.querySelectorAll(triggerSelector);

  if (modal && modalTrigger.length > 0) {
    modalTrigger.forEach((btn) => {
      btn.addEventListener("click", () => openModal(modalSelector));
    });
  }

  modal.addEventListener("click", (event) => {
    if (
      event.target === modal ||
      event.target.getAttribute("data-close") == ""
    ) {
      closeModal(modalSelector);
    }
  });

  // отслеживаем событие нажатия клавиш
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape" && modal.classList.contains("show")) {
      closeModal(modalSelector);
    }
  });

  let modalShown = false;

  // window.pageYOffset = сколько уже прокручено страницы
  function showModalByScroll() {
    if (
      !modalShown &&
      window.pageYOffset + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight
    ) {
      openModal(modalSelector);
      modalShown = true; // Устанавливаем флаг, чтобы окно больше не открывалось
    }
  }

  window.addEventListener("scroll", showModalByScroll);
}

export default modal;
export { openModal, closeModal };