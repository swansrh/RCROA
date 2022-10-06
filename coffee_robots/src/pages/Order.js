import React, { useState, useEffect } from 'react';
import { HelloUser } from '../MyComponents/HelloUser'
import { CoffeeBox } from '../MyComponents/coffeeBox'
import { HomeHeader } from '../MyComponents/HomeHeader'
import { Outlet, Link } from "react-router-dom";

function Order() {
    return (
        <><HomeHeader /><><h2>This is the Order Page</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/order">Order</Link>
                </li>
            </ul></></>

    );
}

export default Order;