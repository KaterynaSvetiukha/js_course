function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
  const sliders = document.querySelectorAll(slide);
  const prev = document.querySelector(prevArrow);
  const next = document.querySelector(nextArrow);
  const current = document.querySelector(currentCounter);
  const total = document.querySelector(totalCounter);
  const slidesWrapper = document.querySelector(wrapper); // делаем "карусель"
  const slidesField = document.querySelector(field);
  const width = window.getComputedStyle(slidesWrapper).width;
  const offerSlider = document.querySelector(container);

  let slideIndex = 1;
  let offset = 0;

  if (sliders.length < 10) {
    total.textContent = `0${sliders.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = sliders.length;
    current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * sliders.length + "%";
  slidesField.style.display = "flex";
  slidesField.style.transition = "0.5s all";

  slidesWrapper.style.overflow = "hidden";

  sliders.forEach((slide) => {
    slide.style.width = width;
  });

  offerSlider.style.position = "relative";

  const dots = document.createElement("ol");
  const indicators = [];

  dots.classList.add("carousel-dots");
  offerSlider.append(dots);

  for (let i = 0; i < sliders.length; i++) {
    const dot = document.createElement("li");

    dot.setAttribute("data-slide-to", i + 1);
    dot.classList.add("dot");

    if (i == 0) {
      dot.style.opacity = 1;
    }

    dots.append(dot);
    indicators.push(dot);
  }

  function countAndOpasity() {
    if (sliders.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    indicators.forEach((e) => {
      e.style.opacity = "0.5";
    });

    indicators[slideIndex - 1].style.opacity = 1;
  }

  function deleteLetters(str) {
    return parseFloat(str);
  }

  next.addEventListener("click", () => {
    if (offset == deleteLetters(width) * (sliders.length - 1)) {
      offset = 0;
    } else {
      offset += deleteLetters(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == sliders.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    countAndOpasity();
  });

  prev.addEventListener("click", () => {
    if (offset == 0) {
      offset = deleteLetters(width) * (sliders.length - 1);
    } else {
      offset -= deleteLetters(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = sliders.length;
    } else {
      slideIndex--;
    }

    countAndOpasity();
  });

  indicators.forEach((i) => {
    i.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");

      slideIndex = slideTo;

      offset = deleteLetters(width) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;

      countAndOpasity();
    });
  });

  // showSlides(slideIndex);

  // function showSlides(n) {
  //   if (n > sliders.length) {
  //     slideIndex = 1;
  //   }

  //   if (n < 1) {
  //     slideIndex = sliders.length;
  //   }

  //   sliders.forEach(slide => slide.style.display = 'none');
  //   sliders[slideIndex - 1].style.display = 'block';

  //   if (sliders.length < 10) {
  //   current.textContent = `0${slideIndex}`;
  // } else {
  //   current.textContent = slideIndex;
  // }
  // }

  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }

  // prev.addEventListener('click', () => {
  //   plusSlides(-1);
  // });

  // next.addEventListener('click', () => {
  //   plusSlides(1);
  // });
}

export default slider;