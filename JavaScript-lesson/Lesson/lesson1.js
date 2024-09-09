
const colors = ["pink", "green", "blue", "black", "yellow", "grey"];

let index = 0;

const button = document.querySelector("#changeButton");
const saygac = document.querySelector("#counter");
const artir = document.querySelector("#Artma");
const azalt = document.querySelector("#Azalt");
const menuTitle = document.querySelector("#menuTitle");
const menuItems = document.querySelector("#menuItems");
const shadow = document.querySelector("#shadow");
const text = document.querySelector("#text");
const search = document.querySelector("#search");
const itemList = document.querySelector("#itemList");
const items = document.querySelectorAll("li");

button.addEventListener("click", () => {
  index = (index + 1) % colors.length;

  document.body.style.backgroundColor = colors[index];
});

artir.addEventListener("click", function () {
  index++;
  saygac.textContent = index;
});

azalt.addEventListener("click", function () {
  if (index > 0) {
    index--;
    saygac.textContent = index;
  }
});

menuTitle.addEventListener("click", function () {
  if (menuItems.style.display === "none") {
    menuItems.style.display = "block";
  } else {
    menuItems.style.display = "none";
  }
});

shadow.addEventListener("click", function () {
  if (text.classList.contains("hidden")) {
    text.classList.remove("hidden");
    shadow.textContent = "Gizlə";
  } else {
    text.classList.add("hidden");
    shadow.textContent = "Göstər";
  }
});

search.addEventListener("input", function () {
  const searchText = search.value.toLowerCase();
  for (let i = 0; i < items.length; i++) {
    const itemText = items[i].textContent.toLowerCase();
    if (itemText.includes(searchText)) {
      items[i].classList.remove("hidden");
    } else {
      items[i].classList.add("hidden");
    }
  }
});
