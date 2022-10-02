import './coffeeBox.css';
import React from "react";

class CoffeeGrid extends React.Component {
    render() {
        return (
          <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="flex justify-center text-6xl w-full bg-coffeeCards rounded-lg shadow-md lg:max-w-sm">
                1
              </div>
              <div class="flex justify-center text-6xl w-full bg-coffeeCards rounded-lg shadow-md lg:max-w-sm">
                2
              </div>
              <div class="flex justify-center text-6xl w-full bg-coffeeCards rounded-lg shadow-md lg:max-w-sm">
                3
              </div>
              <div class="flex justify-center text-6xl w-full bg-coffeeCards rounded-lg shadow-md lg:max-w-sm">
                4
              </div>
            </div>
          </div>
        );
    }
}

export { CoffeeGrid }