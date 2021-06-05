import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => (<><Header/><Home/></>)}></Route>
        <Route path="/checkout" render={(props) => (<><Header/><Checkout/></>)}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
