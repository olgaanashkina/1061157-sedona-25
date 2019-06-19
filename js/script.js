var search = document.querySelector(".modal-search");
var modal = document.querySelector(".modal-search-form");
var form = modal.querySelector("form");
var arrival = modal.querySelector("[name=arrival-date]");
var departure = modal.querySelector("[name=departure-data]");
var adults = modal.querySelector("[name=number-adults]");

if (modal.classList.contains("no-js")){
  modal.classList.add("modal-close");
};

search.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("modal-open");
});

adults.addEventListener("click", function (evt) {
  evt.preventDefault();
})

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!arrival.value || !departure.value ) {
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  }
});
