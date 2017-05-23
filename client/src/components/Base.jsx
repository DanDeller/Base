import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Base = ({children}) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <div className="top-bar">
        <div className="top-bar-left">
          <IndexLink to="/">Base</IndexLink>
        </div>

        {Auth.isUserAuthenticated() ? (
          <div className="top-bar-right">
            <Link to="/logout">Log out</Link>
            <Link to='/todo'>Todo List</Link>
          </div>
        ) : (
          <div className="top-bar-right">
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        )}
      </div>

      { /* child component below (homepage and login/logout items) */ }
      {children}

    </div>
  </MuiThemeProvider>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;