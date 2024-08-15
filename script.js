let nameInput = document.getElementById("name");
let dayInput = document.getElementById("day");
let phoneInput = document.getElementById("phone");

function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function createItem(title, price, description, name, phone) {
  const items = JSON.parse(localStorage.getItem("items")) || [];
  const newItem = { id: Date.now(), title, price, description, name, phone };
  items.push(newItem);
  localStorage.setItem("items", JSON.stringify(items));
  alert("Banho agendado com sucesso!");

  const agendarButton = document.getElementById("agendarButton");
  if (agendarButton) {
    agendarButton.textContent = `Agendar ${title} - ${price}`;
    agendarButton.setAttribute("data-description", description);
  }
  console.log(items);
}

function readItems() {
  const items = JSON.parse(localStorage.getItem("items")) || [];
  console.log(items);
  return items;
}

function updateItem(id, updatedTitle, updatedPrice, updatedDescription) {
  const items = JSON.parse(localStorage.getItem("items")) || [];
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    items[index] = {
      ...items[index],
      title: updatedTitle,
      price: updatedPrice,
      description: updatedDescription,
    };
    localStorage.setItem("items", JSON.stringify(items));
    alert("Item atualizado com sucesso!");
  } else {
    alert("Item não encontrado");
  }
  console.log(items);
}

function deleteItem(id) {
  const items = JSON.parse(localStorage.getItem("items")) || [];
  const filteredItems = items.filter((item) => item.id !== id);
  localStorage.setItem("items", JSON.stringify(filteredItems));
  alert("Item deletado com sucesso!");
  console.log(filteredItems);
}

function submitForm() {
  alert("Isso irá te redirecionar ");
  window.open("http://127.0.0.1:5500/form.html");
}
