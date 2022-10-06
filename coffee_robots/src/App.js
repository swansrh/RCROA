import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Queue from "./pages/Queue";

function App() {
return (
  <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="order" element={<Order />} />
        <Route path="queue" element={<Queue />} />
    </Routes>
  </BrowserRouter>
);
}

export default App;
