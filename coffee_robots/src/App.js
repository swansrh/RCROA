import logo from './logo.svg';
import './App.css';
import {HelloUser} from './MyComponents/HelloUser'
import {CoffeeBox} from './MyComponents/coffeeBox'
import {HomeHeader} from './MyComponents/HomeHeader'

function App() {
  return (
    <div className="App">
      <HomeHeader />
      <body>
        <HelloUser quote="Bean here before?" />

        <div class="container mx-auto py-9">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="flex justify-center text-6xl w-full">
                <CoffeeBox coffeeType="Flat White"/>
              </div>
              <div class="flex justify-center text-6xl w-full">
              <CoffeeBox coffeeType="Long Black"/>
              </div>
              <div class="flex justify-center text-6xl w-full">
              <CoffeeBox coffeeType="Cappucciono"/>
              </div>
              <div class="flex justify-center text-6xl w-full">
              <CoffeeBox coffeeType="Macchiato"/>
              </div>
            </div>
          </div>

        
      </body>
    </div>
  );
}


export default App;
