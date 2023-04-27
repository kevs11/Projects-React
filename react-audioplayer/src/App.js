import logo from './logo.svg';
import './App.css';
import Player1 from './Components/Player1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Player1/>
      </header>
    </div>
  );
}

export default App;
