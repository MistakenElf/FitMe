Meteor.methods({
  //Update the currently logged in users profile
  updateMyProfile(fieldName, data) {
    //Make sure user is logged in before letting them update
    //a profile
    if (Meteor.userId()) {
      const currentUser = Meteor.users.findOne({
        _id: this.userId
      });

      if (currentUser.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, you account has been suspended");
      }

      var name = fieldName
      var value = data;
      var query = {};
      query[name] = value;

      //Update the users new profile
      Meteor.users.update({
        _id: this.userId
      }, {
        $set: query
      });

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});