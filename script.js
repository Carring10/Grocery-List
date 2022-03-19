const itemInput = document.getElementById("item-input");
const itemForm = document.getElementById("item-form");
const listItemsContainer = document.getElementById("list-items-container");

function appendListItem() {
  itemForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const listItem = document.createElement("li");
    listItem.innerHTML = itemInput.value;
    listItemsContainer.appendChild(listItem);
  });
}

appendListItem();
