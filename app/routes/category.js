import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    if (params.category_name === 'all' ) {
      return this.store.findAll('item');
    } else {
      return this.store.query('item', {
        orderBy: 'category',
        equalTo: params.category_name,
      });
    }
  },
});
