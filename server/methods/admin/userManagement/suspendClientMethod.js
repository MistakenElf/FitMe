Meteor.methods({
  suspendClientAdmin(clientId) {
    //Make sure the user is a trainer and logged in before
    //allowing the deletion of a client
    if (Roles.userIsInRole(this.userId, 'admin')) {
      let user = Meteor.users.findOne(clientId);

      if (user.userStatus == "active") {
        Meteor.users.update({
          _id: user._id
        }, {
          $set: {
            userStatus: "suspended",
            previouslySuspended: true
          }
        });
      } else {
        Meteor.users.update({
          _id: user._id
        }, {
          $set: {
            userStatus: "active",
            previouslySuspended: false
          }
        });
      }
    } else {
      throw new Meteor.Error("Not-Authorized");
    }
  }
});