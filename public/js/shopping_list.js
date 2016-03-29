function ShoppingList() {
  this.items = [];
  this.addItem = function(newItem) {
    if(newItem instanceof ShoppingListItem !== true) {
      throw Error('this is not a ShoppingListItem');
    }
    this.items.push(newItem);
  }; //end of addItem method

  this.removeItem = function(previousItem) {


    if(this.items.indexOf(previousItem) !== -1) {
      this.items.splice(this.items.indexOf(previousItem), 1);
      return this.items;
    } else if(!previousItem) {
      this.items.pop();
      return this.items;
      } else if(previousItem instanceof ShoppingListItem !== true) {
      throw Error('this is not a ShoppingListItem!');
         }
  }; //end of remove method

  this.render = function() {

    var concatRendered = "";

    for(var i= 0; i< this.items.length; i++) {
      concatRendered += this.items[i].render(i);
    }
    return concatRendered;

  }; //end of render method
}








