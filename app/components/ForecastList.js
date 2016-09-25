var React = require('react');
var PropTypes = React.PropTypes;
var ForecastItemContainer = require('../containers/ForecastItemContainer');


var styles = {
  outerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "50px auto"
  }
}

function ForecastList(props){
  return (
    <div style={styles.outerWrapper}>
      {props.forecastList.map(function(item,index){
        return <ForecastItemContainer key={index} forecast={item} city={props.city}/>;
      })}
    </div>
  )
}


module.exports = ForecastList;
