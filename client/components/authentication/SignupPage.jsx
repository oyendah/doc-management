import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';
import SignupForm from './SignupForm.jsx';

/**
 * HomePage Component
 */
class SignupPage extends React.Component {

  /**
 * React Render
 * @return {object} html
 */
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s6 offset-s3">
            <span className="flow-text center-align">Create an Account</span>
            <SignupForm saveUser={this.props.actions.saveUser}
            isUserExists={this.props.actions.isUserExists}
            />
          </div>
        </div>
      </div>
    );
  }
}
SignupPage.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.object.isRequired
};

/**
 *  map state to props
 *
 * @param {any} state
 * @returns {object}
 */
function mapStateToProps(state) {
  return { user: state.user };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
