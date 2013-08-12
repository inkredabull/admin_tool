AdminTool.Router.map(function () {
  
  this.resource('users');
  this.resource('user', { path: '/user/:user_id' });
  this.resource('user.edit', { path: '/user/:user_id/edit' });
  
});
