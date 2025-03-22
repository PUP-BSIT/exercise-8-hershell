function validateComment() {
  let commentName = document.getElementById("comment_name");
  let commentMessage = document.getElementById("comment_form");
  let commentButton = document.getElementById("comment_button");

  if (comment_name.value.length < 1 || comment_message.value.length < 1) {
    comment_button.disabled = true;
  } else {
    comment_button.disabled = false;
  }
}

document
  .getElementById("comment_name")
  .addEventListener("input", validateComment);
document
  .getElementById("comment_form")
  .addEventListener("input", validateComment);
