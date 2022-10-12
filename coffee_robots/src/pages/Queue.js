import React, { useState, useEffect } from 'react';
import { HomeHeader } from '../MyComponents/HomeHeader'


function Queue() {
  const [orders, setOrders] = useState([]);
  
  const getCoffees = () => {
    fetch('http://localhost:3001')
      .then(response => {
       
        return response.json();
      })
      .then(data => {
       
        setOrders([data]);
      });
  };

  useEffect(() => {
    getCoffees();
  }, []);

  
  return (
    <><HomeHeader />
      {orders[0][0].fName}
      </>

 
  );
}

export default Queue;