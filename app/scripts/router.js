AdminTool.Router.map(function () {
  
  this.resource('user');
  this.resource('user', { path: '/user/:user_id' });
  this.resource('user.edit', { path: '/user/:user_id/edit' });
  
});
