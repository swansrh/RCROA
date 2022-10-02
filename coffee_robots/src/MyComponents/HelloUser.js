import './test.css';
import React from "react";

class HelloUser extends React.Component {
    render() {
        return (
            <h1 class="text-2xl py-20 font-bold py-4">Weclome, {this.props.quote}</h1>
        );
    }
}

export { HelloUser }