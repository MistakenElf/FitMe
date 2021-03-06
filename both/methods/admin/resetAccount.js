import moment from 'moment';

const resetAccount = new ValidatedMethod({
  name: "resetAccount",

  validate: new SimpleSchema({
    trainerId: {
      type: String
    }
  }).validator(),

  run({
    trainerId
  }) {
    if (Roles.userIsInRole(this.userId, "admin")) {
      //Get todays date
      let today = moment().format("MM/DD/YYYY");

      //Set expiration back to one week
      let expires = moment().add(1, "weeks").format("MM/DD/YYYY");

      //Update trainer to the free plan
      Meteor.users.update({
        _id: trainerId
      }, {
        $set: {
          clientLimit: 1,
          planType: "Free",
          datePurchased: today,
          expiresOn: expires,
          hasPaid: false
        }
      });

      //Remove clients associated with the current trainer
      Meteor.users.remove({
        createdBy: trainerId
      });

      //Remove cardio of the client being deleted
      ClientCardio.remove({
        createdBy: trainerId
      });

      //Remove stats of the client being deleted
      ClientStats.remove({
        createdBy: trainerId
      });

      //Remove workout of client being deleted
      ClientWorkout.remove({
        createdBy: trainerId
      });

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
