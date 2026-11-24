const buttond20 = document.querySelector("#button-d20");

buttond20.addEventListener("click", function () {
  console.log("d20 was clicked");
});
const buttond20 = document.querySelector("#button-d20");
const noted20 = document.querySelector("#note-d20");

noted20.hidden = true;                // the script hides it

buttond20.addEventListener("click", function () {
  noted20.hidden = !noted20.hidden;  // ! means "not": shown becomes hidden, and back
  buttond20.setAttribute("aria-expanded", !noted20.hidden);  // tells a screen reader it is open
});