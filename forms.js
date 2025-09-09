import { openModal, closeModal } from "./modal.js";
import { postData } from "../services/services.js";

function forms(formSelector) {
  const forms = document.querySelectorAll(formSelector);

  const message = {
    loading: "img/spinner.svg",
    success: "Спасибо! Мы  с Вами свяжемся",
    failt: "Что-то пошло не так...",
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      console.log("Форма отправляется");
      e.preventDefault(); // Отмена стандартного поведения браузера

      const statusMessage = document.createElement("img");
      statusMessage.src = "img/spinner.svg";
      statusMessage.style.cssText = `display: block; margin: 0 auto;`;
      form.insertAdjacentElement("afterend", statusMessage);

      // const request = new XMLHttpRequest();
      // request.open("POST", "http://localhost/food_dist/food_dist/js/server.php");

      // request.setRequestHeader("Content-type", "application/json");
      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      // entries - это метод который возвращает массив пар (ключ-значение)
      // fromEntries - это метод который принимает массив пар и возвращает объект

      function showThanksModal(message) {
        const prevModalDialog = document.querySelector(".modal__dialog");

        prevModalDialog.classList.add("hide");
        openModal(".modal");
        const thanksModal = document.createElement("div");
        thanksModal.classList.add("modal__dialog");
        thanksModal.innerHTML = `
      <div class="modal__content">
        <div class='modal__close' data-close>×</div>
        <div class='modal__title'>${message}</div>
      </div>
    `;

        document.querySelector(".modal").append(thanksModal);
        setTimeout(() => {
          thanksModal.remove();
          prevModalDialog.classList.add("show");
          prevModalDialog.classList.remove("hide");
          closeModal(".modal");
        }, 3000);
      }

      postData("http://localhost/food_dist/food_dist/js/server.php", json)
        .then((data) => {
          console.log(data);
          showThanksModal(message.success);
          form.reset();
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failt);
        })
        .finally(() => {
          // запрос который выполняется всегда
          form.reset();
        });

      // request.addEventListener("load", () => {
      //   if (request.status === 200) {
      //     console.log(request.response);
      //     showThanksModal(message.success);
      //     form.reset();
      //     statusMessage.remove();
      //   } else {
      //     showThanksModal(message.failt);
      //   }
      // });
    });
  }

  // // fetch встроенный метод для роботы с запросами и использует промисы
  // fetch("https://jsonplaceholder.typicode.com/posts", {
  //   method: "POST",
  //   body: JSON.stringify({ name: "Alex" }),
  //   headers: {
  //     // это заголовки и они сегда идут во множественном числе
  //     "Content-type": "application/json"
  //   },
  // }).then((response) => response.json())
  //   .then((json) => console.log(json));

  // fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   .then((data) => data.json())
  //   .then((res) => console.log(res));
}

export default forms;