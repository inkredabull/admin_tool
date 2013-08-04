AdminTool.User = Ember.Object.extend({
  name: DS.attr('string'),
  email: DS.attr('string')
});
AdminTool.User.FIXTURES = [
  { id: 1, name: 'foo', email: 'foo@example.com' },
  { id: 2, name: 'bar' , email: 'bar@example.com' }
];
