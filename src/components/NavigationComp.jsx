import React from "react";
import logo from "../assets/beauty-shopping-logo.svg";
import Button from '@mui/material/Button';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function NavigationComp() {
    
    const coreNavigationItems = [
        { id: 1, name: "Home", comp: "/" },
        { id: 2, name: "Facials", comp: "/facial" },
        { id: 3, name: "Pedicure", comp: "/manicure" },
        { id: 4, name: "Manicure", comp: "/pedicure" },
        { id: 5, name: "Hair", comp: "/hair" },
    ];

    const otherNavigationItems = [
        { id: 1, name: "About Us", comp: "/about-us" },
        { id: 2, name: "Contact Us", comp: "/contact-us" },
    ];

    const coreNavigationButtons = coreNavigationItems.map((item) => {
        return (
            <div className="h-fit w-fit mx-1" key={item.id}>
                <a href={ item.comp }>
                    <Button variant="text">{ item.name }</Button>
                </a>
            </div>
            
        );
    });

    const otherNavigationButtons = otherNavigationItems.map(function createOtherNavigationButtons(item) {
        return (
            <a href={ item.comp }
                key={item.id}>
                <Button variant="text">{ item.name }</Button>
            </a>
        );
    });

    return (
        <div className="h-[8%] p-2 shadow-md flex items-center justify-between sticky top-0 backdrop-blur-lg bg-white z-30">
            <div className="flex items-center">
                <h1 className="inline-flex mr-6">
                    <img src={ logo } alt="app-logo" className="w-8" />
                    Beauty Shopping
                </h1>
                { coreNavigationButtons } 
            </div>
            <div>
                { otherNavigationButtons }
                {/* { ShoppingBasketIcon } */}
            </div>
            {/* <Button variant="text">{ ShoppingBasketIcon }</Button> */}
        </div>
    ); 
}