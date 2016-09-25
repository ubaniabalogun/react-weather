var React = require('react');
var PropTypes = React.PropTypes;
var ForecastView = require('./ForecastView');
var Loading = require('./Loading');
var ForecastList = require('./ForecastList');

var styles = {
  header: {
      fontSize: "65px",
      color: "#333",
      fontWeight: "100",
      textAlign: "center",
      marginTop: "50px",
      marginBottom: "30px",
  },
  paragraph: {
    fontSize: "30px",
    color: "#333",
    fontWeight: "100"
  }
}

function Forecast(props){
  return ( props.isLoading === true
                ? <Loading headerStyle={styles.header}/>
                : <ForecastView city={props.city}>
                    <ForecastList forecastList={props.forecastList}/>
                  </ForecastView>
  )
}


Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = Forecast;
