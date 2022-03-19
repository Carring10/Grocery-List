const itemInput = document.getElementById("item-input");
const itemForm = document.getElementById("item-form");
const listItemsContainer = document.getElementById("list-items-container");

function appendListItem() {
  itemForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const listItem = document.createElement("li");
    listItem.innerHTML = itemInput.value;
    listItemsContainer.appendChild(listItem);
    console.log(listItem);

    const listItemsArray = JSON.parse(localStorage.getItem("listItems"));
    listItemsArray.push(itemInput.value);
    localStorage.setItem("listItems", JSON.stringify(listItemsArray));

    itemInput.value = "";
  });
}

appendListItem();
