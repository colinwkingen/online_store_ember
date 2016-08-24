import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  cost: DS.attr(),
  category: DS.attr(),
  quantity: DS.attr()
});
