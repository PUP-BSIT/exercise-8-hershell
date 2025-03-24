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

function addElement() {
  let nameInput = document.getElementById("comment_name").value;
  let commentInput = document.getElementById("comment").value;

  let commentSection = document.querySelector(".groupmate-comments");
  let commentHolder = document.createElement("p");
  commentSection.append(commentHolder);
  commentHolder.textContent = nameInput + ": " + commentInput;
}

function clearInput() {
  document.getElementById("comment_name").value = "";
  document.getElementById("comment").value = "";
}

document.getElementById("comment_name").addEventListener("input", toggleButton);
document.getElementById("comment").addEventListener("input", toggleButton);
