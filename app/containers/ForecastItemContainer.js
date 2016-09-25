var React = require('react');
var ForecastItem = require('../components/ForecastItem');



var ForecastItemContainer = React.createClass({
  contextTypes : {
    router: React.PropTypes.object.isRequired,
  },
  handleForecastClick: function(){
    this.context.router.push({
      pathname: "/detail/" + this.props.city,
      state:{
        forecast: this.props.forecast
      }
    })

  },
  render: function(){
    return (
      <ForecastItem forecast={this.props.forecast}
        onForecastClick={this.handleForecastClick}/>
    )
  }
})

module.exports = ForecastItemContainer;
