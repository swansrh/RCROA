import "./coffeeBox.css";
import React from "react";

class HomeHeader extends React.Component {
  render() {
    return (
        <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-coffeeCustom shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <h2 className="text-4xl font-comfortaaBold text-coffeeDark hover:text-blue-dark">Secure Beans</h2>
        </div>
        <div>
          <a href="/one" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">One</a>
          <a href="/two" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Two</a>
          <a href="/three" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Three</a>
        </div>
      </nav>
    );
  }
}

export { HomeHeader };