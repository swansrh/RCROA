import "./coffeeBox.css";
import React from "react";
import { Outlet, Link } from "react-router-dom";

class HomeHeader extends React.Component {
  render() {
    return (
        <nav className="font-sans relative py-4 w-full flex flex-wrap justify-between bg-coffeeCards rounded-b-2xl shadow-xl">
            <span className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 px-3">Help</span>
            <span className="text-4xl font-comfortaaBold text-coffeeDark hover:text-blue-dark ml-2 pl-4"><Link to="/">Secure Beans</Link></span>
            <span className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 pr-3">Report Issue</span>
      </nav>
    );
  }
}

export { HomeHeader };