import Ember from 'ember';

export default Ember.Service.extend({
  cartItems: [],

  add(item) {
    this.get('cartItems').pushObject(item);
    console.log(this.get('cartItems'));
  },
  remove(item) {
    this.get('cartItems').removeObject(item);
  },
  totalPrice() {
    var totalCost = 0;
    this.get('cartItems').forEach(function(item){
      totalCost += item.cost;
    });
    return totalCost;
  }

});
