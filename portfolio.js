function changeElement(button) {
  const group = button.closest(".content-group"); 
  const elementId = button.dataset.target;

  group.querySelectorAll("[id]").forEach(panel => panel.classList.remove("active"));

  group.querySelector("#" + elementId).classList.add("active");

  group.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));

  button.classList.add("active");
}

function changePage(button) {
  const group = button.closest(".projectPage"); 
  const elementId = button.dataset.target;
  const panelClass = "." + button.dataset.panelClass;

  group.querySelectorAll(panelClass).forEach(panel => panel.classList.remove("active"));

  document.getElementById(elementId).classList.add("active");

  const buttonContainer = button.closest("div");
  buttonContainer.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));

  button.classList.add("active");
}