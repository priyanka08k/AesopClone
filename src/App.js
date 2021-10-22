import './App.css';
import Header from "./containers/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Middle from "./containers/Middle";
import Footer from "./containers/Footer";
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import ProductComponent from './containers/ProductComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Middle />
        <Switch>
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productID" exact component={ProductDetail} />
        <Route>404 Not found!</Route>
        </Switch>
      </Router>

      <Footer className="App-footer" />
      
    </div>
  );
}

export default App;
