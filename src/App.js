import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import logo from './images/richards-logo.png';
import AnonymousLanding from './components/AnonymousLanding';
import Register from './components/Register';
import Login from './components/Login';
import UserDetails from './components/UserDetails';
import AllListings from './components/AllListings';
import ListingDetails from './components/ListingDetails';
import Listing from './components/AllListings/Listing';

function App() {
  return (
    <div className="App">

      <Header logo={logo}></Header>

      <Switch>
        <Route path="/" component={AllListings} exact/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/listings/0" component={ListingDetails} />
      </Switch>

      <Footer></Footer>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
