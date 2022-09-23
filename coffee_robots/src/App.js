import logo from './logo.svg';
import './App.css';
import {HelloUser} from './MyComponents/test'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloUser name="Rhys Swansbra"/>
      </header>
    </div>
  );
}

export default App;
