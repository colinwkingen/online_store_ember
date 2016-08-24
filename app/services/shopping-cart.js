import Ember from 'ember';

export default Ember.Service.extend({
  cartItems: [],
  cartTotal: 0,
  itemCount: 0,
  add(item) {
    // include will need to be overwritten so that it evaluates ID equality instead of object equality
    if (!this.get('cartItems').includes(item)) {
      //Instead of item being pushed in, we will need to create an identical copy with same ID (and quantity of 1)
      item.set('quantity', 1);
      this.get('cartItems').pushObject(item);
    } else {
      //indexOf will need to be overwritten so that it evaluates ID equality instead of object equality
      var index = this.get('cartItems').indexOf(item);
      var itemInArray = this.get('cartItems')[index];
      itemInArray.set('quantity', itemInArray.get('quantity')+1);
    }

    var newCount = this.get('itemCount')+1;
    this.set('itemCount', newCount);
    var newTotal = item.get('cost') + this.get('cartTotal');
    this.set('cartTotal', newTotal);
  },
  remove(item) {
    var index = this.get('cartItems').indexOf(item);
    var itemInArray = this.get('cartItems')[index];
    if (itemInArray.get('quantity') === 1) {
      this.get('cartItems').removeObject(item);
    } else {
      itemInArray.set('quantity', itemInArray.get('quantity')-1);
    }
    var newCount = this.get('itemCount')-1;
    this.set('itemCount', newCount);
    var newTotal = this.get('cartTotal') - item.get('cost');
    this.set('cartTotal', newTotal);
  }
});
