import './test.css';
import React from "react";

class HelloUser extends React.Component {
    render() {
        return (
            <div>
                <h1 class="text-3xl font-bold underline">Weclome Back, {this.props.name}</h1>
                <p>Feel like a coffee?</p>
            </div>
        );
    }
}

export { HelloUser }