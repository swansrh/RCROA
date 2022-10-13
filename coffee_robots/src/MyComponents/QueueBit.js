import React from "react";

class QueueBit extends React.Component {
    render() {
        return (
            <div className="w-full bg-coffeeCards rounded-lg shadow-md pt-2 pb-2 pl-6 mt-2 content-start content-center">
                <div class="grid grid-cols-4 gap-4 content-center">
                    <div class="text-center">Name: {this.props.firstName} {this.props.lastName}</div>
                    <div class="text-center">Coffee: {this.props.type}, {this.props.size}</div>
                    <div class="text-center">Order Number: {this.props.orderNum}</div>
                    <div class="text-center">Order Status: {this.props.status}</div>
                </div>
            </div >
        );
    }
}

export { QueueBit }