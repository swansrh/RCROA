import logo from './logo.svg';
import './App.css';
import {HelloUser} from './MyComponents/test'
import {CoffeeBox} from './MyComponents/coffeeBox'
import {HomeHeader} from './MyComponents/HomeHeader'

function App() {
  return (
    <div className="App">
      <HomeHeader />
      <body>
      <HelloUser name="Rhys Swansbra"/>
      <div class="grid grid-rows-2 grid-flow-col gap-4">
        <CoffeeBox coffeeType="Flat White" imageLocation="./MyComponents/coffee-cardEG.png" />
        <CoffeeBox coffeeType="Cappucciono"/>
        <CoffeeBox coffeeType="Long Black"/>
        <CoffeeBox coffeeType="Macchiato"/>
      </div>

      </body>
    </div>
  );
}

export default App;
