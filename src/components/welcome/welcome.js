import React from 'react';
import PropTypes from 'prop-types';

import './welcome.scss';

class Welcome extends React.Component {
  render() {
    const {message} = this.props;
    return (
      <div className="component-welcome">
        <h1>{message}</h1>
      </div>
    );
  }
}

Welcome.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Welcome;
