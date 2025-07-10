const container = document.getElementById("checkbox-container");
const stats = document.getElementById("stats");
const seconds = document.getElementById("seconds");

let checked = 0;

function createCheckboxes() {
  for (const child of container.children) {
    if (Math.random() > 0.9 && child.checked) {
      child.checked = false;
      checked--;
    }
  }

  let r = Math.floor(Math.random() * (15 - 2 + 1)) + 2;
  for (let i = 0; i < r; i++) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", (e) => {
      if (e.target.checked) {
        checked++;
      } else {
        checked--;
      }
      stats.innerText = checked;
    });
    if (i == r - 1) {
      checkbox.addEventListener("click", createCheckboxes, { once: true });
    }
    container.appendChild(checkbox);
  }
  stats.innerText = checked;
}

let t = 0;

setInterval(() => {
  t++;
  seconds.innerText = t;
}, 1000);

createCheckboxes();
