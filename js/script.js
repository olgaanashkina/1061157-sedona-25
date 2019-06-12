  var search = document.querySelector(".modal-search");

  var modal = document.querySelector(".modal-search-form");

  var form = modal.querySelector("form");

  var arrival = modal.querySelector("[name=arrival-date]");

  var departure = modal.querySelector("[name=departure-data]");


  if (modal.classList.contains("no-js")){
    modal.classList.add("modal-close");
   };

  search.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.toggle("modal-open");
  });

  form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  }
  });
