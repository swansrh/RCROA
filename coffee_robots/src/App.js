import logo from './logo.svg';
import './App.css';
import {HelloUser} from './MyComponents/test'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloUser name="Rhys Swansbra"/>
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
      </header>
    </div>
  );
}

export default App;
