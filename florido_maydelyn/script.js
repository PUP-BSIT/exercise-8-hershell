function toggleButton() {
  let nameInput = document.getElementById("comment_name");
  let commentInput = document.getElementById("comment");
  let commentButton = document.getElementById("comment_button");

  if (nameInput.value.length && commentInput.value.length) {
    commentButton.disabled = false;
  } else {
    commentButton.disabled = true;
  }
}

document.getElementById("comment_name").addEventListener("input", toggleButton);
document.getElementById("comment").addEventListener("input", toggleButton);
