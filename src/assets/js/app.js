$(document).ready(function () {
  let slide = $(".slide");
  slide.slick({
    infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 799,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          autoplay: false,
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
    this.value = this.value.replace(/[^0-9\./+/./(/./)-/./-/./)/]/g, "");
  });

  /* Ввод +7 при нажатии на поле инпута*/
  const input = document.body.querySelector(".telmask");
  input.addEventListener("focus", () => {
    if (input.value.length === 0) {
      input.value = "+7";
      input.selectionStart = input.value.length;
    }
  });

  $(".telmask").on("keydown", function (e) {
    // Запрет выделения ctrl + a
    if (e.ctrlKey && e.keyCode === 65) return false;

    // Запрет выделения клавишами
    if (
      e.shiftKey &&
      ((e.keyCode === 37 && this.selectionStart < 4) ||
        (e.keyCode === 39 && this.selectionStart < 3) ||
        e.keyCode === 38 ||
        e.keyCode === 40)
    )
      return false;

    // Запрет удаления через backspace и del
    if (e.keyCode == 46 && this.selectionStart < 3) return false;
    else if (e.keyCode == 8 && this.selectionStart < 4) return false;
  });

  var inp = document.getElementById("inp");

  var old = 0;

  inp.onkeydown = function () {
    var curLen = inp.value.length;

    if (curLen < old) {
      old--;
      return;
    }

    if (curLen == 2) inp.value = inp.value + "(";

    if (curLen == 6) inp.value = inp.value + ")-";

    if (curLen == 11) inp.value = inp.value + "-";

    if (curLen == 14) inp.value = inp.value + "-";

    if (curLen > 16) inp.value = inp.value.substring(0, inp.value.length - 1);

    old++;
  };

  let burger = document.querySelector(".burger img");

  burger.addEventListener("click", function () {
    let navModal = document.querySelector(".nav-modal");
    navModal.classList.add("show");
  });
  let close = document.querySelector(".nav-modal .close");
  close.addEventListener("click", function () {
    let navModal = document.querySelector(".nav-modal");
    navModal.classList.remove("show");
  });

  /*let acc = document.getElementsByClassName("accordion");
  let i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
    };
  }*/
  let acc = document.querySelectorAll(".accordion-items .accordion");

  acc.forEach(onAccClick);

  function onAccClick(item) {
    item.addEventListener("click", function () {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
});
