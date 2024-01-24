import logo from './logo.svg';
import './App.css';
import Data from './Data'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Study Hours Data</h1>
      </header>
      <div className='App-Data'>
        <Data />
      </div>   
    </div>
  );
}

export default App;
