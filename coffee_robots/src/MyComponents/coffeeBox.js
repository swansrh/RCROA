import './coffeeBox.css';
import React from "react";

class CoffeeBox extends React.Component {
    render() {
        return (
            <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                    React Tailwind Card with Image
                </h4>
                <p className="mb-2 leading-normal">
                    react tailwind css card with image It is a long established
                    fact that a reader will be distracted by the readable
                    content.
                </p>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                    Flat White
                </button>
            </div>
        </div>
        );
    }
}

export { CoffeeBox }