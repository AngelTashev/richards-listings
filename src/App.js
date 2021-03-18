import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import logo from './images/richards-logo.png';
import AnnonymousLanding from './components/AnnonymounsLanding';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
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
      <Header logo={logo}></Header>
      <Login></Login>
      <Footer></Footer>
    </div>
  );
}

export default App;
