import MyClassLogo from './logo.svg';

import './App.css';

const App = () => {

  //Javscript
  const MyFunc = () => {

  }


  //HTML
  return (
    <div className="App">
      <header className="App-header">
        <img src={MyClassLogo} className="App-logo" alt="logo" />
        
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
      </header>
    </div>
  );
}

export default App;
