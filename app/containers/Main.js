var React = require('react');
var GetInputContainer = require('../containers/GetInputContainer');
require('../main.css');


var Main = React.createClass({
  render: function(){
    return (
      <div style={{width:"100%",height:"92%"}}>
        <div className="wrapper wrapper-title">
          <h2 style={{margin:"0",}}>React Weather</h2>
          <GetInputContainer styling="wrapper wrapper-input wrapper-horizontal"/>
        </div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
