import React, { useState, useEffect } from 'react';
import { HelloUser } from '../MyComponents/HelloUser'
import { CoffeeBox } from '../MyComponents/coffeeBox'
import { HomeHeader } from '../MyComponents/HomeHeader'
import { Outlet, Link } from "react-router-dom";

function Queue() {
    const [merchants, setMerchants] = useState(false);
    useEffect(() => {
      getCoffees();
    }, []);
  
    function getCoffees() {
      fetch('http://localhost:3001')
        .then(response => {
          return response.text();
        })
        .then(data => {
          setMerchants(data);
        });
    }
    return (
        <><HomeHeader /><div>
            {merchants ? merchants : 'There is no merchant data available'}
        </div></>
    );
}

export default Queue;