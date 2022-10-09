import React, { useState, useEffect } from 'react';
import { HomeHeader } from '../MyComponents/HomeHeader'
import { Outlet, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Order() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
return (
        <><HomeHeader />
        
        <body>
        <h2 class="container mx-auto py-9">Order a Coffee?</h2>
        
        <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
            <label class="block text-gray-700 text-sm font-bold mb-2">First Name
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue={"First Name"} {...register("firstName")} />
            </label>

            <label class="block text-gray-700 text-sm font-bold mb-2">Last Name
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("lastName")} />
            </label>

            <label class="block text-gray-700 text-sm font-bold mb-2">Coffee Type
                <select {...register("Coffee Type")}>
                    <option value="flatWhite">Flat White</option>
                    <option value="longBlack">Long Black</option>
                    <option value="cappucciono">Cappucciono</option>
                    <option value="macchiato">Macchiato</option>
                </select>
            </label>

            <button className="px-4 py-2 font-comfortaaBold text-sm text-coffeeCustom bg-coffeeDark rounded shadow">
            <input type="submit" />
            </button>
        </form>
    </div>
    
    </body>
    
    
    
    
    </>

);
}

export default Order;