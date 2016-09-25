var React = require('react');
var PropTypes = React.PropTypes;


function Loading(props){
  return (
    <div style={{textAlign: "center"}}>
      <h1 style={props.headerStyle}>Loading</h1>
    </div>
  )
}

Loading.propTypes = {
  headerStyle: PropTypes.object,
}


module.exports = Loading;
