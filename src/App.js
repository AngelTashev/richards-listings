import { Switch, Route, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

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

  const [loggedUser, setLoggedUser] = useState(null);

  return (
    <div className="App">

      <AuthContext.Provider value={{ user: loggedUser, setUser: setLoggedUser }}>

        <Header logo={logo}></Header>

        <Switch>
          {loggedUser &&
            <Route path="/" component={AllListings} exact />
          }
          {!loggedUser &&
            <Route path="/" component={AnonymousLanding} exact />
          }
          {/* <Route path="/listings/:category" component={AllListings} exact /> */}

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/listings/:id" user={loggedUser} component={ListingDetails} exact />
          <Route path="/listings/:id/edit" user={loggedUser} component={EditListing} exact />
          <Route path="/add-listing" user={loggedUser} component={AddListing} />
          <Route path="/user" user={loggedUser} component={UserDetails}></Route>
          <Route path="/logout" render={() => {
            firebase.auth().signOut();
            setLoggedUser(null);
            return <Redirect to='/' />
          }}></Route>


        </Switch>

        <Footer></Footer>
      </AuthContext.Provider>



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
