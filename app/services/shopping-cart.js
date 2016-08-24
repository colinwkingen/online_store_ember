import Ember from 'ember';

export default Ember.Service.extend({
  cartItems: [],
  cartTotal: 0,
  add(item) {
    this.get('cartItems').pushObject(item);
    var newTotal = item.get('cost') + this.get('cartTotal');
    this.set('cartTotal', newTotal);
  },
  remove(item) {
    this.get('cartItems').removeObject(item);
    var newTotal = this.get('cartTotal') - item.get('cost');
    this.set('cartTotal', newTotal);
  }
});
