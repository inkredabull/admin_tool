AdminTool.User = DS.Model.extend({
    name: DS.attr('string'),

    email: DS.attr('string')
});

// probably should be mixed-in...
AdminTool.User.reopen({
  // certainly I'm duplicating something that exists elsewhere...
  attributes: function(){
    var attrs = [];
    var model = this;
    $.each(Em.A(Ember.keys(this.get('data.attributes'))), function(idx, key){
      var pair = { key: key, value: model.get(key) };
      attrs.push(pair);
    });
    return attrs;
  }.property()
});

// delete below here if you do not want fixtures
AdminTool.User.FIXTURES = [
  
  {
    id: 0,
    
    name: 'foo',
    
    email: 'foo'
    
  },
  
  {
    id: 1,
    
    name: 'foo',
    
    email: 'foo'
    
  }
  
];
