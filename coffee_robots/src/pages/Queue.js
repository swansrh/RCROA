import React, { useState, useEffect } from 'react';
import { HelloUser } from '../MyComponents/HelloUser'
import { CoffeeBox } from '../MyComponents/coffeeBox'
import { HomeHeader } from '../MyComponents/HomeHeader'
import { Outlet, Link } from "react-router-dom";

function Queue() {
    const [orders, setOrders] = useState(false);
    useEffect(() => {
      getCoffees();
    }, []);
  
    function getCoffees() {
      fetch('http://localhost:3001')
        .then(response => {
          let asJson = response.json();
          console.log(asJson)
          return asJson[1];

        })
        .then(data => {
          setOrders(data);
        });
    }
    return (
        <><HomeHeader /><div>

            {orders}

        </div></>
    );
}

export default Queue;