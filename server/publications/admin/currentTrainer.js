Meteor.publish('currentTrainer', function (currentTrainerId) {
  new SimpleSchema({
    currentTrainerId: {
      type: String
    }
  }).validate({
    currentTrainerId
  });

  if (Roles.userIsInRole(this.userId, "admin")) {
    //Find a specific trainer based on the flow router
    //param passed in as currentTrainerId
    return Meteor.users.find({
      _id: currentTrainerId
    });
  } else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});
