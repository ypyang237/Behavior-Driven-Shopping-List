

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
}); //end of ShoppingListItem Class


describe('ShoppingList', function() {
  var sl;
  beforeEach(function() {
    sl = new ShoppingList('macbook', 'surfacebook');
  });

  it('should be a function', function() {
    expect(ShoppingList).to.be.a('function');
  });

  it('should have a property named items', function(){
    expect(sl).to.have.property('items');
  });

  it('should have a constructor that initializes items as an empty Array', function() {
    expect(sl.items).to.be.an('array');
  });

  describe('addItem Method', function() {

   it('should have a method named addItem that adds the ShoppingList object to the items array', function() {
    var mySli = new ShoppingListItem('choc', 'good');

    expect(sl.addItem).to.exist;
    (sl.addItem(mySli));
    expect(sl.items).to.have.length.of(1);
    expect(sl.items[0]).to.equal(mySli);
    });

   it ('should throw an error if anything else that is not an ShoppingListItem is passed in', function() {
      console.log(sl);

      expect(sl.addItem.bind(sl, 'string')).to.throw(Error);
   });




  });//end of add Item Method

  // it('should have a method named removeItem that accepts a single ShoppingList argument', function() {
  //   expect(sl.removeItem).to.exist;
  //   expect(sl.removeItem()).to.be.an('array');
  //   expect(sl.removeItem).to.have.property('items');
  // });
});//end of ShoppingList class