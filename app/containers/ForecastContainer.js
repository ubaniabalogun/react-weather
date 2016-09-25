var React = require('react');
var Forecast = require('../components/Forecast');
var openweatherHelpers = require('../utils/openweatherHelpers');

var ForecastContainer = React.createClass({
  getInitialState: function(){
    return {
      isLoading: true,
      forecastList: []
    }
  },
  componentDidMount: function(){
    var city = this.props.params.city;
    var forecast = openweatherHelpers.getForecast(city)
    forecast.then(function(info){
      var forecastList = info.data.list;
      this.setState({
        isLoading: false,
        forecastList: forecastList
      })
    }.bind(this))
  },
  render: function(){
    return (
      <Forecast
        isLoading={this.state.isLoading}
        city={this.props.params.city}
        forecastList={this.state.forecastList}/>
    )
  }
})


module.exports = ForecastContainer;
