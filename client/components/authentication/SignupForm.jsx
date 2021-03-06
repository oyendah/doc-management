import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import toastr from 'toastr';
import TextInput from '../common/TextInput.jsx';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      errors: {}
    };
    this.onChange = this
      .onChange
      .bind(this);
    this.saveUser = this
      .saveUser
      .bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
    this.clearError = this.clearError.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    user.roleId = 2;
    this.setState({ user });
  }

  isFormValid() {
    let formIsValid = true;
    const errors = {};
    if (this.state.user.password.length < 5) {
      errors.password = 'Password must be at least 5 characters.';
      formIsValid = false;
    }
    this.setState({ errors });
    return formIsValid;
  }

  checkUserExists(event) {
    const field = event.target.name;
    const val = event.target.value;
    if (val !== '') {
      this.props.isUserExists(val).then((res) => {
        const errors = this.state.errors;
        let invalid;
        if (res.data.user) {
          errors[field] = `There is user with such ${field}`;
          invalid = true;
        } else {
          errors[field] = '';
          invalid = false;
        }
        this.setState({ errors, invalid });
      });
    }
  }

  clearError(event) {
    const field = event.target.name;
    const errors = this.state.errors;

    errors[field] = '';
    const invalid = false;
    this.setState({ errors, invalid });
  }

  saveUser(event) {
    event.preventDefault();
    if (!this.isFormValid()) {
      return;
    }
    this
      .props
      .saveUser(this.state.user)
      .then(() => this.redirect())
      .catch(() => {
        toastr.error(
          'please confirm your username and password and try again');
      });
  }

  redirect() {
    toastr.success('User Successfully Created');
    this.context.router.push('/');
  }

  render() {
    const { errors } = this.state;
    const form = (
      <div className="col s12 z-depth-5 card-panel">
        <form className="login-form">
          <div className="row margin">
            <TextInput
              type="text"
              name="name"
              label="fullname"
              icon="person_outline"
              onChange={this.onChange}
              error={errors.name}/>
          </div>
          <div className="row margin">
            <TextInput
              type="text"
              name="username"
              label="username"
              icon="person"
              onChange={this.onChange}
              onBlur={this.checkUserExists}
              clearError={this.clearError}
              error={errors.username}/>
          </div>
          <div className="row margin">
            <TextInput
              type="email"
              name="email"
              label="email"
              icon="email"
              onChange={this.onChange}
              onBlur={this.checkUserExists}
              clearError={this.clearError}
              error={errors.email}/>
          </div>
          <div className="row margin">
            <TextInput
              type="password"
              name="password"
              label="password"
              icon="lock"
              onChange={this.onChange}
              clearError={this.clearError}
              error={errors.password}/>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="submit"
                value="Sign Up"
                className="btn waves-effect waves-light col s12 pink darken-1"
                onClick={this.saveUser}/>
            </div>
            <div className="input-field col s12">
              <p className="margin center medium-small sign-up">
                Already have an account?
                <Link to="/login"> Login</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
    return (
      <div>
      {form}
      </div>
    );
  }

}
// Pull in the React Router context so router is available on
// this.context.router.
SignupForm.contextTypes = {
  router: PropTypes.object
};
// const SignupForm = ({user, onSave, onChange, saving, errors}) => {};
SignupForm.propTypes = {
  isUserExists: React.PropTypes.func.isRequired,
  saveUser: React.PropTypes.func.isRequired
};

export default SignupForm;
