Template.trainerSchedule.onCreated(function () {
  var self = this;

  //Subscribe to the clients profile based on the url param
  self.autorun(function () {
    self.subscribe("trainerSchedule");
  });
});

Template.trainerSchedule.helpers({
  //Get trainers schedule for monday
  mondaysSchedule: function () {
    return Meteor.users.find({
      'userProfile.mondaysSchedule': {
        $exists: true
      }
    }, {
      fields: {
        username: 1,
        "userProfile.mondaysSchedule": 1,
        "userProfile.firstName": 1,
        "userProfile.lastName": 1
      },
      sort: {
        "userProfile.mondaysSchedule": 1
      }

    });
  },
  
  //Get trainers schedule for tuesday
  tuesdaysSchedule: function () {
    return Meteor.users.find({
      'userProfile.tuesdaysSchedule': {
        $exists: true
      }
    }, {
      fields: {
        username: 1,
        "userProfile.tuesdaysSchedule": 1,
        "userProfile.firstName": 1,
        "userProfile.lastName": 1
      },
      sort: {
        "userProfile.tuesdaysSchedule": 1
      }
    });
  },
  
  //Get trainers schedule for wednesday
  wednesdaysSchedule: function () {
    return Meteor.users.find({
      'userProfile.wednesdaysSchedule': {
        $exists: true
      }
    }, {
      fields: {
        username: 1,
        "userProfile.wednesdaysSchedule": 1,
        "userProfile.firstName": 1,
        "userProfile.lastName": 1
      },
      sort: {
        "userProfile.wednesdaysSchedule": 1
      }
    });
  },
  
  //Get trainers schedule for thursday
  thursdaysSchedule: function () {
    return Meteor.users.find({
      'userProfile.thursdaysSchedule': {
        $exists: true
      }
    }, {
      fields: {
        username: 1,
        "userProfile.thursdaysSchedule": 1,
        "userProfile.firstName": 1,
        "userProfile.lastName": 1
      },
      sort: {
        "userProfile.thursdaysSchedule": 1
      }
    });
  },
  
  //Get trainers schedule for friday
  fridaysSchedule: function () {
    return Meteor.users.find({
      'userProfile.fridaysSchedule': {
        $exists: true
      }
    }, {
      fields: {
        username: 1,
        "userProfile.fridaysSchedule": 1,
        "userProfile.firstName": 1,
        "userProfile.lastName": 1
      },
      sort: {
        "userProfile.fridaysSchedule": 1
      }
    });
  },
  
  //Get trainers schedule for saturday
  saturdaysSchedule: function () {
    return Meteor.users.find({
      'userProfile.saturdaysSchedule': {
        $exists: true
      }
    }, {
      fields: {
        username: 1,
        "userProfile.saturdaysSchedule": 1,
        "userProfile.firstName": 1,
        "userProfile.lastName": 1
      },
      sort: {
        "userProfile.saturdaysSchedule": 1
      }
    });
  },
  
  //Get trainers schedule for sunday
  sundaysSchedule: function () {
    return Meteor.users.find({
      'userProfile.sundaysSchedule': {
        $exists: true
      }
    }, {
      fields: {
        username: 1,
        "userProfile.sundaysSchedule": 1,
        "userProfile.firstName": 1,
        "userProfile.lastName": 1
      },
      sort: {
        "userProfile.sundaysSchedule": 1
      }
    });
  },

  //Check if the user is currently logging in
  isLoggingIn: function () {
    return Meteor.loggingIn();
  }
});