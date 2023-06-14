
document.getElementById("openPopupButton").addEventListener("click", function() {
  document.getElementById("popupForm").classList.add("show");
});

document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const note = document.getElementById("note").value;

  const cardContainer = document.getElementById("cardContainer");
  const card = document.createElement("button");
  card.className = "card";
  card.innerHTML = "<h3>" + title + "</h3><p>" + note + "</p>";
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Hapus";
  deleteButton.addEventListener("click", function() {
  card.remove();
});
card.appendChild(deleteButton);

  cardContainer.appendChild(card);

  document.getElementById("popupForm").classList.remove("show");
  document.getElementById("form").reset();
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
  document.getElementById("popupForm").classList.remove("show");
});

window.addEventListener("click", function(event) {
  if (event.target == document.getElementById("popupForm")) {
    document.getElementById("popupForm").classList.remove("show");
  }
});






