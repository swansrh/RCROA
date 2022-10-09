import React, { useState, useEffect } from 'react';
import { HomeHeader } from '../MyComponents/HomeHeader'
import { Outlet, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Order() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <><HomeHeader />
            <h2 class="container mx-auto py-9">Order a Coffee?</h2>

            <div class="w-full">
                <form class=" rounded px-8 pt-6 pb-8 mb-4 justify-center mx-80" onSubmit={handleSubmit(onSubmit)}>
                    <label class="block text-gray-700 text-sm font-bold mb-2">First Name
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue={"First Name"} {...register("firstName")} />
                    </label>

                    <label class="block text-gray-700 text-sm font-bold mb-2">Last Name
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("lastName")} />
                    </label>

                    <div class="relative">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Coffee Type
                            <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("Coffee Type")}>
                                <option value="flatWhite">Flat White</option>
                                <option value="longBlack">Long Black</option>
                                <option value="cappucciono">Cappucciono</option>
                                <option value="macchiato">Macchiato</option>
                            </select>
                        </label>
                    </div>

                    <div class="relative">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Milk Type
                            <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("Coffee Type")}>
                                <option value="lactoseFree">Lactose Free</option>
                                <option value="almond">Almond</option>
                                <option value="oat">Oat</option>
                                <option value="fullCream">Full Cream</option>
                            </select>
                        </label>
                    </div>

                    <div class="relative">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Size
                            <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("Coffee Type")}>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </label>
                    </div>

                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                            <button className="px-4 py-2 font-comfortaaBold text-sm text-coffeeCustom bg-coffeeDark rounded shadow" type="button">
                                <input type="submit" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>

    );
}

export default Order;