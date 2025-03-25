let nameInput = document.getElementById("comment_name");
let commentInput = document.getElementById("comment_text");
let commentButton = document.getElementById("comment_button");

function toggleButton() {
  if (nameInput.value.trim() && commentInput.value.trim()) {
    commentButton.disabled = false;
  } else {
    commentButton.disabled = true;
  }
}

nameInput.addEventListener("input", toggleButton);
commentInput.addEventListener("input", toggleButton);
