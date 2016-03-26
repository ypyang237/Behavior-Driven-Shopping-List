
// var myShinyShoppingList = new ShoppingList();
// var myWants = myShinyShoppingList.render();

// document.getElementById('add_to_shopping_list').innerHTML = myWants;
var myWants = new ShoppingList();


function add_to_shopping_list() {
  var itemTitle = document.getElementById('title').value;
  var itemDescription = document.getElementById('description').value;
  var new_shopping_list_item = new ShoppingListItem(itemTitle, itemDescription);
  myWants.addItem(new_shopping_list_item);
  console.log(myWants);
  return myWants;
}

document.getElementById('add_shopping_list_item_button').addEventListener('click', function() {
  add_to_shopping_list();
});

