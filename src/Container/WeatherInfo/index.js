import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { postLocationRequest } from './actions';
import {
  getSuccessResponse,
  getErrorResponse,
  getLoadingStatus,
  getSuccessStatus,
} from './selectors';
import Button from 'Component/Button';

const mapStateToProps = createStructuredSelector({
  successResponse: getSuccessResponse(),
  errorResponse: getErrorResponse(),
  loading: getLoadingStatus(),
  success: getSuccessStatus(),
});

const mapDispatchToProps = dispatch => ({
  postLocation: location => dispatch(postLocationRequest(location)),
});

class WeatherInfo extends Component {
  state = {
    location: 'Kathmandu',
    weather: '',
    stats: {},
    wind: {},
    errorMessage: '',
  };

  componentDidMount() {
    this.props.postLocation(this.state.location);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.successResponse !== this.props.successResponse) {
      if (Object.keys(this.props.successResponse).length > 0) {
        this.setState({
          weather: this.props.successResponse.weather[0].main,
          stats: this.props.successResponse.main,
          wind: this.props.successResponse.wind,
        });
      } else {
        this.setState({
          weather: '',
          stats: {},
          wind: {},
        });
      }
    }

    if (prevProps.errorResponse !== this.props.errorResponse) {
      if (Object.keys(this.props.errorResponse).length > 0) {
        this.setState({
          errorMessage: this.props.errorResponse.message,
        });
      } else {
        this.setState({ errorMessage: '' });
      }
    }
  }

  handleLocationChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.location) {
      this.props.postLocation(this.state.location);
    }
  };

  render() {
    const { location, weather, stats, wind, errorMessage } = this.state;
    const { loading, success } = this.props;
    return (
      <React.Fragment>
        <div>Enter a location</div>
        <input
          type="text"
          name="location"
          value={location}
          onChange={this.handleLocationChange}
        />
        <Button
          handleSubmit={this.handleSubmit}
          disabled={!location || loading}
          text={'Get weather'}
        />
        <hr />
        {!loading && success && (
          <React.Fragment>
            {weather && (
              <div>
                <b>Weather Status: </b>
                {weather}
              </div>
            )}
            <hr />
            {wind && (
              <div>
                <b>Wind Status:</b>
                <p>Degrees: {wind.deg} degrees</p>
                <p>Speed: {wind.speed} km/hr</p>
              </div>
            )}
            <hr />
            {stats && (
              <div>
                <b>Temperature: {stats.temp} F</b> <b>Max: {stats.temp_max}F</b>{' '}
                <b>Min: {stats.temp_min} F</b>{' '}
                <p>Pressure: {stats.pressure} Pa</p>
                <p>Humidity: {stats.humidity}</p>
              </div>
            )}
          </React.Fragment>
        )}
        {loading && <div>Loading...</div>}
        {errorMessage && !loading && <div>{errorMessage}</div>}
      </React.Fragment>
    );
  }
}

WeatherInfo.propTypes = {
  successResponse: PropTypes.object,
  errorResponse: PropTypes.object,
  loading: PropTypes.bool,
  success: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherInfo);
