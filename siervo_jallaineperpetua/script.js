document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("comment_name");
  const commentInput = document.getElementById("comment_text");
  const commentButton = document.getElementById("comment_botton");

  function toggleButton() {
    if (nameInput.value.trim() !== "" && commentInput.value.trim() !== "") {
      commentButton.disabled = false;
    } else {
      commentButton.disabled = true;
    }
  }

  nameInput.addEventListener("input", toggleButton);
  commentInput.addEventListener("input", toggleButton);
});
