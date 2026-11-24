const buttonD20 = document.querySelector("#button-D20");
const noteD20 = document.querySelector("#note-D20");

noteD20.hidden = true;

buttonD20.addEventListener("click", function () {
  noteD20.hidden = !noteD20.hidden;
  buttonD20.setAttribute("aria.expanded", !noteD20.hidden);
  });