import logo from './logo.svg';
import './App.css';
import {HelloUser} from './MyComponents/test'
import {CoffeeBox} from './MyComponents/coffeeBox'

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
      </header>
      <body>
      <HelloUser name="Rhys Swansbra"/>
        <CoffeeBox />
      </body>
    </div>
  );
}

export default App;
