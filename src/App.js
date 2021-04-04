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
import AddListing from './components/AddListing';
import EditListing from './components/EditListing';

import './utils/firebase';

let isUserLogged = true;

function App() {
  return (
    <div className="App">

      <Header logo={logo}></Header>

      <Switch>
        {isUserLogged &&
          <Route path="/" component={AllListings} exact />
        }
        {!isUserLogged &&
          <Route path="/" component={AnonymousLanding} exact />
        }
        {/* <Route path="/listings/:category" component={AllListings} exact /> */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/listings/:id" component={ListingDetails} exact/>
        <Route path="/listings/:id/edit" component={EditListing} exact/>
        <Route path="/add-listing" component={AddListing} />
        <Route path="/user" component={UserDetails}></Route>
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
