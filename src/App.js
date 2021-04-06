import { Switch, Route, Redirect } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

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

import AuthContext from './components/AuthContext';

import firebase from './utils/firebase';

function App() {

  const { user } = useContext(AuthContext);
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(firebase.auth().onAuthStateChanged(setLoggedUser), []);

  return (
    <div className="App">


      <Header logo={logo} user={loggedUser}></Header>

      <Switch>
        {loggedUser &&
          <Route path="/" component={AllListings} exact />
        }
        {!loggedUser &&
          <Route path="/" component={AnonymousLanding} exact />
        }
        {/* <Route path="/listings/:category" component={AllListings} exact /> */}
        <AuthContext.Provider value={{ user: null }}>

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/listings/:id" user={loggedUser} component={ListingDetails} exact />
          <Route path="/listings/:id/edit" user={loggedUser} component={EditListing} exact />
          <Route path="/add-listing" user={loggedUser} component={AddListing} />
          <Route path="/user" user={loggedUser} component={UserDetails}></Route>
          <Route path="/logout" render={() => {
            firebase.auth().signOut();
            return <Redirect to='/' />
          }}></Route>
          
        </AuthContext.Provider>

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
