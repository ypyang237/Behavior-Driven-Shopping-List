function ShoppingListItem(name, description) {
  this.name = name;
  this.description = description;
  this.is_done = false;
  this.check = function() {
    this.is_done = true;
  };
  this.uncheck = function() {
    this.is_done = false;
  };
  this.render = function() {
    var rendered = '<ul>' +'<li class="' + 'completed_' + this.is_done + '"' + '>' +
    '<span>' + this.name + '</span>' + '<span>' + this.description + '</span>' +'</li>' +'<ul>';
    return rendered;

  };
}  //end of ShoppingListItem

function ShoppingList() {
  this.items = [];
  this.addItem = function(newItem) {
    if(newItem instanceof ShoppingListItem !== true) {
      throw Error('this is not a ShoppingListItem');
    }
    this.items.push(newItem);

  };
}






