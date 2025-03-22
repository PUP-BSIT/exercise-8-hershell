function checkForm() {
  let name = document.getElementById("name_comment").value;
  let comment = document.getElementById("comment").value;
  let button = document.getElementById("comment_button");

  if (name && comment) {
    button.disabled = false;
    button.classList.remove("disabled");
    button.classList.add("enabled");
  } else {
    button.disabled = true;
    button.classList.remove("enabled");
    button.classList.add("disabled");
  }
}
