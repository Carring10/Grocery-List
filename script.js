const itemInput = document.getElementById("item-input");
const itemForm = document.getElementById("item-form");
const listItemsContainer = document.getElementById("list-items-container");

function appendListItem() {
  itemForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let listItems = JSON.parse(localStorage.getItem("listItems"));
    if (listItems) {
      const itemObject = {
        groceryItem: itemInput.value,
        isCheckedOff: false,
      };
      listItems.push(itemObject);
      localStorage.setItem("listItems", JSON.stringify(listItems));
      for (let i = 0; i < listItems.length; i++) {
        console.log(listItems[i]);
        const groceryListItem = document.createElement("li");
        groceryListItem.innerText = listItems[i].groceryItem;
        listItemsContainer.appendChild(groceryListItem);
      }
    } else {
      const listItemsArray = [];
      const itemObject = {
        groceryItem: itemInput.value,
        isCheckedOff: false,
      };
      listItemsArray.push(itemObject);
      localStorage.setItem("listItems", JSON.stringify(listItemsArray));
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
