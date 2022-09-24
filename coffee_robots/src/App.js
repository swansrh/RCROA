import logo from './logo.svg';
import './App.css';
import {HelloUser} from './MyComponents/test'
import {CoffeeBox} from './MyComponents/coffeeBox'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloUser name="Rhys Swansbra"/>
        <CoffeeBox />
      
      </header>
    </div>
  );
}

export default App;
