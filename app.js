
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

function changeCheckedStatus(idx) {


}

  document.getElementById('content').addEventListener('click', function(event) {

    if(event.target.type === 'checkbox') {
      var index = (event.target.dataset.index);

      if(myWants.items[index].is_done !== true){

        myWants.items[index].check();
         console.log(myWants.items[index]);
      }
      else {

        myWants.items[index].uncheck();
         console.log(myWants.items[index]);
      }

      // console.log(myWants.items[index]);
    }
  });
  changeCheckedStatus();
