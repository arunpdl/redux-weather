import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Headline extends Component {
  render() {
    const { header, desc } = this.props;

    if (!header) {
      return null;
    }

    return (
      <div data-test="headlineComponent">
        <h1 data-test="header">{header}</h1>
        <p data-test="description">{desc}</p>
      </div>
    );
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      age: PropTypes.number,
      email: PropTypes.string,
      onlineStatus: PropTypes.bool,
    })
  ),
};

export default Headline;
