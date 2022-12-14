import './coffeeBox.css';
import React from "react";
import { Outlet, Link } from "react-router-dom";

class CoffeeBox extends React.Component {
    render() {
        return (
            <div className="w-full bg-coffeeCards rounded-lg shadow-md lg:max-w-sm">
                <img
                className="object-cover w-full lg:w-40 lg:h-40"
                src="coffee-cardEG.png"
                alt=""
                />
                <div className="p-4">
                    <button className="px-4 py-2 font-comfortaaBold text-sm text-coffeeCustom bg-coffeeDark rounded shadow">
                        <Link to="/order">{this.props.coffeeType}</Link>
                    </button>
                </div>
            </div>
        );
    }
}

export { CoffeeBox }