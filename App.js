const form = document.querySelector("form");
const inputs = document.querySelectorAll(".input");
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    if (!input.value || !input.validity.valid) {
      form.classList.add("error");
      input.classList.add("error");
      input.nextElementSibling.style.display = "inline-block";
    } else {
      input.classList.remove("error");
      input.nextElementSibling.style.display = "none";
    }
  });

  if (form.classList[0] === "error") {
    form.classList.remove("error");
  } else {
    inputs.forEach((input) => (input.value = ""));
    submit.innerText = "success!";
    setTimeout(() => {
      submit.innerText = "claim your free trial";
    }, 1000);
  }
});
