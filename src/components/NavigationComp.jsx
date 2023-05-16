import React from "react";
import logo from "../assets/beauty-shopping-logo.svg";
import Button from '@mui/material/Button';

export default function NavigationComp() {
    const coreNavigationItems = [
        { name: "Home", comp: "" },
        { name: "Facials", comp: "" },
        { name: "Manicure", comp: "" },
        { name: "Pedicure", comp: "" },
        { name: "Hair", comp: "" },
    ];

    const otherNavigationItems = [
        { name: "About Us", comp: "" },
        { name: "Contact Us", comp: "" },
    ];

    const coreNavigationButtons = coreNavigationItems.map((item) => {
        return (
            <div className="h-fit w-fit mx-1">
                <Button variant="text" color="primary" disableElevation>{ item.name }</Button>
            </div>
            
        );
    });

    const otherNavigationButtons = otherNavigationItems.map(function createOtherNavigationButtons(item) {
        return (
            <Button variant="text">{ item.name }</Button>
        )
    });

    return (
        <div className="h-[8%] p-2 shadow-md flex items-center justify-between">
            <div className="flex items-center">
                <h1 className="inline-flex mr-6">
                    <img src={ logo } alt="app-logo" className="w-8" />
                    Beauty Shopping
                </h1>
                { coreNavigationButtons }
            </div>
            <div>
                { otherNavigationButtons }
            </div>
            
        </div>
    ); 
}