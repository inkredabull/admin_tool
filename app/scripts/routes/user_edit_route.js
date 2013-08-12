AdminTool.UserEditRoute = Ember.Route.extend({
  model: function(model) {
    return AdminTool.User.find(model.user_id);
  }
});

