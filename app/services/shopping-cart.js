import Ember from 'ember';

export default Ember.Service.extend({
  cartItems: [],

  add(item) {
    this.get('cartItems').pushObject(item);
    console.log(this.get('cartItems'));
  }
});
