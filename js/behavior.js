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
  }; //end of addItem method

  this.removeItem = function(previousItem) {
    // var filterItems = this.items.filter(function(e) {
    //   return e!== previousItem;
    // });
    // return filterItems;

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
      concatRendered += this.items[i].render();
    }
    return concatRendered;
  }; //end of render method
}







