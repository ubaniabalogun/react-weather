var React = require('react');
var ForecastItem = require('./ForecastItem');

var styles = {
  detailsWrapper: {
      fontSize: "34px",
      fontWeight: "100",
      maxWidth: "400px",
      margin: "0 auto",
      textAlign: "center",
  }

}

function ForecastDetail(props){
  console.log(props);
  return (
    <div>
      <ForecastItem forecast={props.forecast}/>
      <div style={styles.detailsWrapper}>
        <p>{props.city}</p>
        <p>{props.forecast.weather[0].description}</p>
        <p>min temp: {Math.floor(props.forecast.temp.min)} degrees</p>
        <p>max temp: {Math.floor(props.forecast.temp.max)} degrees</p>
        <p>humidity: {props.forecast.humidity}</p>
      </div>
    </div>

  )
}

module.exports = ForecastDetail;
