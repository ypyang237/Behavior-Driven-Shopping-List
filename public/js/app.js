
// var myShinyShoppingList = new ShoppingList();
// var myWants = myShinyShoppingList.render();

// document.getElementById('add_to_shopping_list').innerHTML = myWants;
var myWants = new ShoppingList();


function add_to_shopping_list() {
  var itemTitle = document.getElementById('title').value;
  var itemDescription = document.getElementById('description').value;
  var new_shopping_list_item = new ShoppingListItem(itemTitle, itemDescription);
  myWants.addItem(new_shopping_list_item);
  return myWants;
}

document.getElementById('add_shopping_list_item_button').addEventListener('click', function() {
add_to_shopping_list();
document.getElementById('content').innerHTML = myWants.render();

});



  document.getElementById('content').addEventListener('click', function(event) {

    if(event.target.type === 'checkbox') {
      var index = (event.target.dataset.index);

      if(myWants.items[index].is_done !== true){

        myWants.items[index].check();
      }
      else {
        myWants.items[index].uncheck();

      }
    }  //end of checkbox

    if(event.target.nodeName === 'BUTTON') {
      var removeIndex = event.target.dataset.index;
      myWants.items.splice(removeIndex, 1);
      document.getElementById('content').innerHTML = myWants.render();

    }

  });


