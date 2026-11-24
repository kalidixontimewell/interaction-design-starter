const openD20 = document.querySelector("#openD20");

document.querySelector("#buttonD20").addEventListener("click", function () {
    openD20.showModal(); // opens it over the page; Esc closes it too
});

document
  .querySelector("#closeD20")
  .addEventListener("click", function () {
    openD20.close();
  });

  const openD4 = document.querySelector("#openD4");

document.querySelector("#buttonD4").addEventListener("click", function () {
    openD4.showModal(); // opens it over the page; Esc closes it too
});

document
  .querySelector("#closeD4")
  .addEventListener("click", function () {
    openD4.close();
  });