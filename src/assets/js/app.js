$(document).ready(function () {
  let slide = $(".slide");
  slide.slick({
    infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    fade: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 799,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          centerMode: true,
          autoplay: true,
        },
      },
    ],
  });

  $(".prev").on("click", function () {
    slide.slick("slickPrev");
  });
  $(".next").on("click", function () {
    slide.slick("slickNext");
  });
  /* Пометки для себя============
 ================================= */
  /* С помощью регулярного выражения запрещаем ввод всего кроме цифр*/
  document.querySelector(".telmask").addEventListener("input", function (e) {
    this.value = this.value.replace(/[^0-9\.]/g, "");
  });

  /* Ввод +7 при нажатии на поле инпута*/
  const input = document.body.querySelector(".telmask");
  input.addEventListener("focus", () => {
    if (input.value.length === 0) {
      input.value = "+7";
      input.selectionStart = input.value.length;
    }
  });

  input.addEventListener("click", (evt) => {
    if (input.selectionStart < 2) {
      input.selectionStart = input.value.length;
    }
    if (evt.key === "Backspace" && input.value.length <= 2) {
      evt.preventDefault();
    }
  });

  input.addEventListener("blur", () => {
    if (input.value === "+7") {
      input.value = "";
    }
  });

  /* Не дает удалять +7 */
  input.addEventListener("keydown", (evt) => {
    if (evt.key === "Backspace" && input.value.length <= 2) {
      evt.preventDefault();
    }
  });
});
