import React, { useState, useEffect } from "react";
import NavigationComp from "./components/NavigationComp";
import HomeViews from "./views/HomeViews";
import ManicureViews from "./views/ManicureViews";
import PedicureViews from "./views/PedicureViews";
import HairViews from "./views/HairViews";
import FacialsViews from "./views/FacialsViews";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


export default function App() {
    return (
        <div>
            <NavigationComp  />
            <Router>
                <Routes>
                    <Route path="/" element={ <HomeViews /> } />          
                    <Route path="/manicure" element={ <ManicureViews /> } />          
                    <Route path="/facial" element={ <FacialsViews /> } />          
                    <Route path="/hair" element={ <HairViews /> } />          
                    <Route path="/pedicure" element={ <PedicureViews/> } />          
                             
                </Routes>
            </Router>
        </div>
    )
}