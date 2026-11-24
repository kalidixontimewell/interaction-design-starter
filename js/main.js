const postcard = document.querySelector("#postcard");

document.querySelector("#open-postcard").addEventListener("click", function () {
  postcard.showModal(); // opens it over the page; Esc closes it too
});

document
  .querySelector("#close-postcard")
  .addEventListener("click", function () {
    postcard.close();
  });