Accounts.validateLoginAttempt(function (loginAttempt) {
  //Invalid login
  if (!loginAttempt.allowed) {
    throw new Meteor.Error(403, "Invalid login credentials");
  }

  //Find the user logging in
  var thisUser = Meteor.users.findOne({
    _id: loginAttempt.user._id
  });

  //Check if their user status is suspended and give them an error
  //so they cant login if they are suspended
  if ((thisUser.userStatus == "suspended") && (Roles.userIsInRole(thisUser._id, "client"))) {
    throw new Meteor.Error(403, "User account is inactive, please make payment to your trainer");
  }

  return true;
});
