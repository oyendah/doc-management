// This component handles the App template used on every page.
import React, { PropTypes } from 'react';
import Header from './common/Header';
import FlashMessagesList from './flash/FlashMessagesList';
/**
 *
 */
class App extends React.Component {
  componentDidMount() {
    $('.button-collapse').sideNav();
    $('.modal').modal();
  }
  /**
   * @return {object} html
   */
  render() {
    return (
      <div>
        <Header/>
        <FlashMessagesList />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

/**
 * [mapStateToProps description]
 * @param  {[type]} state    [description]
 * @param  {[type]} ownProps [description]
 * @return {[type]}          [description]
 */
// function mapStateToProps(state, ownProps) { } export default
// connect(mapStateToProps)(App);
export default App;
