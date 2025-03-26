function validateComment() {
  let commentName = document.getElementById("comment_name");
  let commentMessage = document.getElementById("comment_form");
  let commentButton = document.getElementById("comment_button");

  if (commentName.value.length && commentMessage.value.length) {
    commentButton.disabled = false;
  } else {
    commentButton.disabled = true;
  }
}

function addComment() {
  const newComment = {
    name: commentName.value,
    comment: commentMessage.value,
  };

  const newCommentElement = document.createElement("li");
  newCommentElement.innerHTML = `${newComment.name}: ${newComment.comment}`;

  commentContainer.appendChild(newCommentElement);

  commentName.value = "";
  commentMessage.value = "";
  validateComment();
}

document
  .getElementById("comment_name")
  .addEventListener("input", validateComment);
document
  .getElementById("comment_form")
  .addEventListener("input", validateComment);
