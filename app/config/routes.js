var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../containers/Main');
var Home = require('../components/Home');
var ForecastContainer = require('../containers/ForecastContainer');
var ForecastDetailContainer = require('../containers/ForecastDetailContainer');

var routes = (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Home} />
          <Route path="forecast/:city" component={ForecastContainer} />
          <Route path="detail/:city" component={ForecastDetailContainer} />
        </Route>
      </Router>
)

module.exports = routes;
