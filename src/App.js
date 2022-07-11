import logo from './logo.svg';
import './App.css';
import PageHeader from './PageHeader/PageHeader';
import Search from './Search/Search';
import Transactions from './Transactions/Transactions';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Search />
      <Transactions />
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
