const container = document.getElementById("checkbox-container");

function createCheckboxes() {
  for (const child of container.children) {
    if (Math.random() > 0.9) {
      child.checked = false;
    }
  }
  let r = Math.floor(Math.random() * (15 - 2 + 1)) + 2;
  for (let i = 0; i < r; i++) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    if (i == r - 1) {
      checkbox.addEventListener(
        "click",
        (e) => {
          createCheckboxes();
          checkbox.removeEventListener("click", this);
        },
        { once: true }
      );
    }
    container.appendChild(checkbox);
  }
}

createCheckboxes();
