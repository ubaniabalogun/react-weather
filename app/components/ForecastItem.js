var React = require('react');
var PropTypes = React.PropTypes;
var moment = require('moment');

styles = {
  forecastItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "35px"
  },
  subtitle: {
    fontSize: "30px",
    color: "#333",
    fontWeight: "100"
  }
}

function renderDate(timestamp){
  var d = new Date(0);
  d.setUTCSeconds(timestamp);
  return moment(d).format("dddd, MMM D");
}

function ForecastItem(props){
  var icon =  props.forecast.weather[0].icon + ".svg";
  var dt = props.forecast.dt;
  return (
    <div style={styles.forecastItem} onClick={props.onForecastClick} >
      <img src={"../app/images/weather-icons/" + icon} style={{height: "130px"}}/>
      <h2 style={styles.subtitle}>{renderDate(dt)}</h2>
    </div>
  )
}


ForecastItem.propTypes = {
  forecast: PropTypes.object.isRequired,
  onForecastClick: PropTypes.func
}

module.exports = ForecastItem;
