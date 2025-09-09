import { getResourse } from "../services/services";

function cards() {
  class Cards {
    constructor(src, alt, title, text, price, parent) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.text = text;
      this.price = price;
      this.parent = document.querySelector(parent);
      this.transfer = 45; // курс доллара к гривне
      this.changetoUAN();
    }

    changetoUAN() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement("div");
      element.innerHTML = `
      <div class="menu__item">
        <img src=${this.src} alt=${this.alt} />
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.text}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
      </div>`;
      this.parent.append(element);
    }
  }

  // getResourse("js/server.php")
  //   .then(data => {
  // data.forEach(({ img, altimg, title, descr, price }) => {
  //   new Cards(img, altimg, title, descr, price, ".menu .container").render();
  // });
  //   })

  axios.get("js/server.php").then((data) => {
    data.data.forEach(({ img, altimg, title, descr, price }) => {
      new Cards(img, altimg, title, descr, price, ".menu .container").render();
    });
  });

  // new Cards(
  //   "img/tabs/vegy.jpg",
  //   "vegy",
  //   'Меню "Фитнес"',
  //   'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
  //   9,
  //   ".menu .container"
  // ).render();

  // new Cards(
  //   "img/tabs/post.jpg",
  //   "post",
  //   'Меню "Постное"',
  //   "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
  //   14,
  //   ".menu .container"
  // ).render();

  // new Cards(
  //   "img/tabs/elite.jpg",
  //   "elite",
  //   "Меню “Премиум”",
  //   "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
  //   15,
  //   ".menu .container"
  // ).render();
}

export default cards;
