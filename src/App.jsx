import React, { useState, useEffect } from "react";
import NavigationComp from "./components/NavigationComp";
import HomeViews from "./views/HomeViews";
import ManicureViews from "./views/ManicureViews";
import PedicureViews from "./views/PedicureViews";
import HairViews from "./views/HairViews";
import FacialsViews from "./views/FacialsViews";
import AboutView from "./views/AboutView";
import ContactView from "./views/ContactView";
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
                    <Route path="/pedicure" element={ <PedicureViews /> } />
                    <Route path="/about-us" element={ <AboutView /> } />
                    <Route path="/contact-us" element={ <ContactView /> } />          
                </Routes>
            </Router>
        </div>
    )
}