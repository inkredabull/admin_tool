AdminTool.UsersRoute = Ember.Route.extend({
  model: function() {
    return AdminTool.User.find();
  }
});

