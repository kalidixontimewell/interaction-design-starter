const buttonD20 = document.querySelector("#button-D20");
const noteD20 = document.querySelector("#note-D20");

noteD20.hidden = true;

buttonD20.addEventListener("click", function () {
  noteD20.hidden = !noteD20.hidden;
  buttonD20.setAttribute("aria.expanded", !noteD20.hidden);
  });

  const openD20 = document.querySelector("#openD20");

document.querySelector("#openD20")
  .addEventListener("click", function () {
    openD20.showModal();
  });

document.querySelector("#closeD20")
  .addEventListener("click", function () {
    closeD20.close();
  });