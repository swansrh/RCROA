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
        
      
      <div class="grid grid-rows-2 grid-flow-col gap-4">
        <CoffeeBox coffeeType="Flat White"/>
        <CoffeeBox coffeeType="Cappucciono"/>
        <CoffeeBox coffeeType="Long Black"/>
        <CoffeeBox coffeeType="Macchiato"/>
      </div>

      </body>
    </div>
  );
}

export default App;
