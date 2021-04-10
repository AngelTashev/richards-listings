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
import AboutUs from './components/AboutUs';
import UserAllListings from './components/UserAllListings';
import DeleteListing from './components/DeleteListing';

import AuthContext from './components/AuthContext';

import firebase from './utils/firebase';

function App() {

  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setLoggedUser);
  }, [])

  return (
    <div className="App">

      <AuthContext.Provider value={{ user: loggedUser }}>

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
          <Route path="/listings/:id" component={ListingDetails} exact />
          <Route path="/listings/:id/edit" component={EditListing} exact />
          <Route path="/listings/:id/delete" component={DeleteListing} exact />
          <Route path="/add-listing" component={AddListing} />
          <Route path="/user" component={UserDetails} exact />
          <Route path="/user/:userId/listings" component={UserAllListings}/>
          <Route path="/about-us" component={AboutUs} />
          <Route path="/logout" render={() => {
            firebase.auth().signOut();
            setLoggedUser(null);
            return <Redirect to='/' />
          }} />


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
