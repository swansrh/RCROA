import React, { useState, useEffect } from 'react';
import { HomeHeader } from '../MyComponents/HomeHeader'
import {QueueBit}  from '../MyComponents/QueueBit'
import { HelloUser } from '../MyComponents/HelloUser'


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
    <HelloUser quote="Order Queue" />
    
    <QueueBit firstName={orders[0][0].fName} lastName={orders[0][0].lName}  type={orders[0][0].coffeeType} size={orders[0][0].size} orderNum={orders[0][0].orderNumber} status={orders[0][0].status}/>
    <QueueBit firstName={orders[0][1].fName} lastName={orders[0][1].lName}  type={orders[0][1].coffeeType} size={orders[0][1].size} orderNum={orders[0][1].orderNumber} status={orders[0][1].status}/>
    <QueueBit firstName={orders[0][2].fName} lastName={orders[0][2].lName}  type={orders[0][2].coffeeType} size={orders[0][2].size} orderNum={orders[0][2].orderNumber} status={orders[0][2].status}/>
    
    
    </>
  );
}

export default Queue;

