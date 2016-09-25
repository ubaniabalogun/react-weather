var React = require('react');
var ForecastDetail = require('../components/ForecastDetail');

var ForecastDetailContainer = React.createClass({
  render: function(){
    console.log(this.props);
    return <ForecastDetail forecast={this.props.location.state.forecast} city={this.props.params.city}/>
  }
})


module.exports =  ForecastDetailContainer;
