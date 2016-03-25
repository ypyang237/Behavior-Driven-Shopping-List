

describe('ShoppingListItem', function() {
  var sli;
  beforeEach(function() {
    sli = new ShoppingListItem('iphone','the newest iphone 8s!');
  });

  it('should be a function', function() {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('should have a property named name', function() {
    expect(sli).to.have.property('name');
  });

  it('should have a property named description', function() {
    expect(sli).to.have.property('description');
  });

  it('should have a property named is_done', function() {
    expect(sli).to.have.property('is_done');
  });

  describe('Check method', function() {

    it('should be a function', function() {
    expect(sli.check).to.be.a('function');
    });

    it('should set is_done to true', function() {
    sli.check();
    expect(sli.is_done).to.equal(true);
    });

  });

  describe('Uncheck method', function() {

    it('should be a function', function() {
      expect(sli.uncheck).to.be.a('function');
    });

    it('should set is_done to false', function() {
      sli.uncheck();
      expect(sli.is_done).to.equal(false);
    });
  });

  describe('Render method', function() {

    it('should be a function', function() {
      expect(sli.render).to.be.a('function');
    });

    it('should return an html formatted string with the properties of the instance method', function() {
      expect(sli.render()).to.be.a('string');
      expect(sli.render()).to.equal('<ul><li class="completed_false"><span>iphone</span><span>the newest iphone 8s!</span></li><ul>');
    });

  });// end of Render method
}); //end of ShoppingListItem


description('ShoppingList', function() {

});