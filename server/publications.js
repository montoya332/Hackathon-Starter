
Meteor.publish("users", function () {
  return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
});
Meteor.publish('getRecords',
  function (params) {
    if (true) {// TODO: if (this.userId) {
      return Collections.find({ });
    } else {        
      return null;              
      }
    }
    );
