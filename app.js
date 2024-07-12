let names  = ["Muhidin", "Shahzod", "Xusan", "Bexruz", "Nodirbek", "Bobur", ]

let p = document.querySelector("p")

let button = document.querySelector("button")


button.addEventListener("click", () => {
    let random = Math.round(Math.random() * names.length);
    let randomname = names[random];
    p.textContent = randomname;
  });