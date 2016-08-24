import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    removeItem(item) {
      this.get('shoppingCart').remove(item);
    }
  },
});
