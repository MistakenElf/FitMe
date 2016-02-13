Login = React.createClass ({
  componentDidMount() {
    $("#loginForm").validate({
      rules: {
        username: {
          required: true
        },

        password: {
          required: true
        }
      },

      messages: {
        username: {
          required: "Please Enter Your Username"
        },

        password: {
          required: "Please Enter Your Password"
        }
      },

      submitHandler(e) {
        //Capture username and password from form
        let username = $('[name=username]').val();
        let password = $('[name=password]').val();

        //Log user in with userrname and password
        Meteor.loginWithPassword(username, password, (error) => {
          //Invalid login
          if (error) {
            //Pop up an alert to show login failed
            Bert.alert(error.reason, 'danger', 'growl-top-right');
          }
        });

        Accounts.onLogin(() => {
          //Go to the admin home if they are an admin
          if(Roles.userIsInRole(Meteor.userId(), "admin")) {
            FlowRouter.go("/adminHome");
          }

          //Go to the trainer home if they are a trainer
          if(Roles.userIsInRole(Meteor.userId(), "trainer")) {
            FlowRouter.go("/trainerHome");
          }

          //Go to the client home if they are a client
          if(Roles.userIsInRole(Meteor.userId(), "client")) {
            FlowRouter.go("/clientHome");
          }
        });
      }
    });
  },

  handleSubmit(e) {
    e.preventDefault();
  },

  render() {
    const styles = {
      buttonStyle: {
        width: "100%"
      }
    };

    return (
      <div className="row">
        <div className="col s12 m8 offset-m2 l6 offset-l3" id="userLoginForm">
          <div className="card-panel grey lighten-4 z-depth-2">
            <h2 className="blue-text center">SIGN IN</h2>
            <form onSubmit={this.handleSubmit} id="loginForm">
              <div className="row">
                <div className="col s12 m12 l12">
                  <input type="text" className="validate" name="username" placeholder="Username" />
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  <input type="password" className="validate" name="password" placeholder="Password" />
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  <button className="btn blue waves-effect" style={styles.buttonStyle}>Login</button>
                  <p><a href="/forgotPassword">Forgot Password?</a></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});