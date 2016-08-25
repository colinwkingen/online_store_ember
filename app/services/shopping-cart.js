import Ember from 'ember';

export default Ember.Service.extend({
  cartItems: [],
  cartTotal: 0,
  itemCount: 0,
  add(item) {
    var index = this.indexOfItem(item);
    if (index === -1) {
      this.get('cartItems').pushObject({"item": item, "quantity": 1});
    } else {
      this.get('cartItems')[index].quantity++;
    }

    var newCount = this.get('itemCount')+1;
    this.set('itemCount', newCount);
    var newTotal = item.get('cost') + this.get('cartTotal');
    this.set('cartTotal', newTotal);
  },
  remove(itemHash) {
    var cart = this.get('cartItems');
    var quant = itemHash.quantity;
    var index = cart.indexOf(itemHash);
    cart.removeObject(itemHash);
    if (itemHash.quantity > 0) {
      this.get('cartItems').pushObject({"item": itemHash.item, "quantity": quant-1});
    }
    var newCount = this.get('itemCount')-1;
    this.set('itemCount', newCount);
    var newTotal = this.get('cartTotal') - itemHash.item.get('cost');
    this.set('cartTotal', newTotal);


  },
  indexOfItem(item) {
     for (var i = 0; i < this.get('cartItems').length; i++) {
      if (this.get('cartItems')[i].item.id === item.id) return i;
    }
    return -1;
  },
});
