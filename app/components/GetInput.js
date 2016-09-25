var React = require('react');
var PropTypes = React.PropTypes;
require('../main.css');

var styles = {
  margin10: {
    margin: "10px"
  }
}

function GetInput(props){
  return (
    <div className={props.styling}>
      <input type="text" className="form-control" placeholder="Oakland, Ca" onChange={props.onUpdateLocation} value={props.location} />
      <button type="button" className="btn btn-success" style={styles.margin10}  onClick={props.onSubmitLocation}>
        Get Weather
      </button>
    </div>
  )
}

GetInput.propTypes = {
  onUpdateLocation: PropTypes.func.isRequired,
  onSubmitLocation: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  styling: PropTypes.string
}

module.exports = GetInput;
