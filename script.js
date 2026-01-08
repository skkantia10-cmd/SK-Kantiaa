const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const title = params.get("title");
const desc = params.get("desc");
const img = params.get("img");

if (title && desc && img) {
  document.getElementById("title").innerText = title;
  document.getElementById("desc").innerText = desc;
  document.getElementById("detailImg").src = img;
}

let comments = JSON.parse(localStorage.getItem("comments") || "[]");

function showComments() {
  const list = document.getElementById("commentList");
  list.innerHTML = "";
  comments.filter(c => c.id === id).forEach(c => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${c.email || "Anonymous"}:</strong> ${c.text}`;
    list.appendChild(li);
  });
}

showComments();

function addComment() {
  const email = document.getElementById("email").value;
  const text = document.getElementById("comment").value;

  if (!text) {
    alert("Write a comment first!");
    return;
  }

  comments.push({ id, email, text });
  localStorage.setItem("comments", JSON.stringify(comments));
  document.getElementById("email").value = "";
  document.getElementById("comment").value = "";
  showComments();
}
