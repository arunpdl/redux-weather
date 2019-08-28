import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postLocationRequest } from './actions';

const mapStateToProps = state => ({
  ...state,
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
  };

  componentDidMount() {
    this.props.postLocation(this.state.location);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.weatherInfo !== this.props.weatherInfo) {
      if (
        this.props.weatherInfo.response &&
        Object.keys(this.props.weatherInfo.response).length > 0
      ) {
        this.setState({
          weather:
            this.props.weatherInfo.response &&
            this.props.weatherInfo.response.weather[0].main,
          stats:
            this.props.weatherInfo.response &&
            this.props.weatherInfo.response.main,
          wind:
            this.props.weatherInfo.response &&
            this.props.weatherInfo.response.wind,
        });
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
    const { location, weather, stats, wind } = this.state;
    console.log('>>>', weather, stats, wind);
    return (
      <React.Fragment>
        <div>Enter a location</div>
        <input
          type="text"
          name="location"
          value={location}
          onChange={this.handleLocationChange}
        />
        <button type="submit" onClick={this.handleSubmit} disabled={!location}>
          Get weather
        </button>
        <hr />
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
            <b>Min: {stats.temp_min} F</b> <p>Pressure: {stats.pressure} Pa</p>
            <p>Humidity: {stats.humidity}</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherInfo);
