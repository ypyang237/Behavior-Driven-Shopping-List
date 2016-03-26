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
  this.render = function(index) {
    var rendered =  '<li class="' + 'completed_' + this.is_done + '"' + '>' +
    '<span>' + this.name + '</span>' + '<br>' + '<div>' + '<input type ="checkbox" data-index =' + index + '>' + '</div>' + '<span>' + this.description + '<button data-index='+index+'>X</button>' +'</span>' + '</li>';
    return rendered;


  };
}  //end of ShoppingListItem

