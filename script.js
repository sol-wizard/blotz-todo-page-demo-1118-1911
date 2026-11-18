const input = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const list = document.getElementById("task-list");
const clearDoneButton = document.getElementById("clear-done-button");

addButton.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  const item = document.createElement("li");
  item.textContent = text;
  list.appendChild(item);

  input.value = "";
  input.focus();
});

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
});

clearDoneButton.addEventListener("click", () => {
  list.querySelectorAll("li.done").forEach((item) => item.remove());
});
