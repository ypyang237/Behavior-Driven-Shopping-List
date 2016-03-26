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
    var rendered = '<ul>' +'<li class="' + 'completed_' + this.is_done + '"' + '>' +
    '<span>' + this.name + '</span>' + '<br>' + '<input type ="checkbox" data-index =' + index + '>' + '<span>' + this.description + '</span>' +'</li>' +'</ul>';
    return rendered;


  };
}  //end of ShoppingListItem