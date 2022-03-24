const itemInput = document.getElementById("item-input");
const itemForm = document.getElementById("item-form");
const listItemsContainer = document.getElementById("list-items-container");
const listItemsArray = [];

function addNewListItem() {
  itemForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (itemInput.value !== "") {
      appendListItem();
    }
    itemInput.value = "";
  });
}

function appendListItem() {
  const itemObject = {
    isCheckedOff: false,
    groceryItem: itemInput.value,
  };
  listItemsArray.push(itemObject);
  localStorage.setItem("listItems", JSON.stringify(listItemsArray));

  const groceryListItem = document.createElement("li");
  groceryListItem.setAttribute("id", "0");
  groceryListItem.innerText = itemInput.value;
  listItemsContainer.appendChild(groceryListItem);
}

function getStoredItems() {
  let listItems = JSON.parse(localStorage.getItem("listItems"));
  if (listItems) {
    listItemsArray.push(...listItems);
    for (let i = 0; i < listItems.length; i++) {
      const groceryListItem = document.createElement("li");
      groceryListItem.setAttribute("id", i);

      const oldListItem = document.getElementById(i.toString());
      if (oldListItem) listItemsContainer.replaceChild(groceryListItem, oldListItem);

      groceryListItem.innerText = listItems[i].groceryItem;
      listItemsContainer.appendChild(groceryListItem);
    }
  }
  console.log(listItemsArray);
}

getStoredItems();
addNewListItem();
