const itemInput = document.getElementById("item-input");
const itemForm = document.getElementById("item-form");
const listItemsContainer = document.getElementById("list-items-container");

function appendListItem() {
  itemForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let listItems = JSON.parse(localStorage.getItem("listItems"));
    if (listItems) {
      const itemObject = {
        isCheckedOff: false,
        groceryItem: itemInput.value,
      };

      listItems.push(itemObject);
      localStorage.setItem("listItems", JSON.stringify(listItems));

      for (let i = 0; i < listItems.length; i++) {
        const groceryListItem = document.createElement("li");
        groceryListItem.setAttribute("id", i);
        const oldListItem = document.getElementById(i.toString());
        if (oldListItem) listItemsContainer.replaceChild(groceryListItem, oldListItem);
        groceryListItem.innerText = listItems[i].groceryItem;
        listItemsContainer.appendChild(groceryListItem);
      }
    } else {
      const listItemsArray = [];
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

    itemInput.value = "";
  });
}

appendListItem();

/* 
 [
   {
       value: 'tomatoes',
       checkedOff: false,
       category: 'veggies'
   }
 ]
*/
