var React = require('react');
var GetInput = require('../components/GetInput');
var openweatherHelpers = require('../utils/openweatherHelpers');


var GetInputContainer = React.createClass({
  contextTypes : {
    router: React.PropTypes.object.isRequired,
  },

  getInitialState: function(){
    return {
      location: ''
    }
  },
  handleUpdateLocation: function(e){
    this.setState({
      location: e.target.value
    })
  },
  handleSubmitLocation: function(e){
    e.preventDefault();
    var location = this.state.location;
    this.setState({
      location: ''
    });
    this.context.router.push({
      pathname: '/forecast/' + location,
    })
  },
  render: function(){
    return (
      <GetInput styling={this.props.styling}
        location={this.state.location}
        onSubmitLocation={this.handleSubmitLocation}
        onUpdateLocation={this.handleUpdateLocation} />
    )
  }
})





module.exports = GetInputContainer;
