import Ember from 'ember';

export default Ember.Service.extend({
  cartItems: [],
  cartTotal: 0,
  itemCount: 0,
  add(item) {
    if (!this.get('cartItems').includes(item)) {
      item.set('quantity', 1);
      this.get('cartItems').pushObject(item);
    } else {
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
