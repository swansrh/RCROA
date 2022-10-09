import { HelloUser } from '../MyComponents/HelloUser'
import { CoffeeBox } from '../MyComponents/coffeeBox'
import { HomeHeader } from '../MyComponents/HomeHeader'
import { Outlet, Link } from "react-router-dom";


function Home() {
    return (
        <div className="App">
            <HomeHeader />
            <body>
                <HelloUser quote="Bean here before?" />

                <div class="container mx-auto py-9">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="flex justify-center text-6xl w-full">
                            <CoffeeBox coffeeType="Flat White" />
                        </div>
                        <div class="flex justify-center text-6xl w-full">
                            <CoffeeBox coffeeType="Long Black" />
                        </div>
                        <div class="flex justify-center text-6xl w-full">
                            <CoffeeBox coffeeType="Cappucciono" />
                        </div>
                        <div class="flex justify-center text-6xl w-full">
                            <CoffeeBox coffeeType="Macchiato" />
                        </div>
                    </div>
                </div>
                <Link to="/queue">
                <button className="px-4 py-2 font-comfortaaBold text-sm text-coffeeCustom bg-coffeeDark rounded shadow">
                        Queue
                    </button></Link>
            </body>
        </div>
    );
}

export default Home;