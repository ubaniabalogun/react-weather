var React = require('react');
var PropTypes = React.PropTypes;

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

function ForecastView(props){
  return (
    <div style={{textAlign:"center"}}>
        <h1 style={styles.header}>
          {props.city}
        </h1>
        <p style={styles.paragraph}>Select a day</p>
        {React.cloneElement(props.children,{city:props.city})}
    </div>
  )
}

ForecastView.propTypes = {
  city: PropTypes.string.isRequired,
}


module.exports = ForecastView;
