import React from "react";
import ProductDisplayComp from "../components/ProductDisplayComp";
import hairItems from "../data/hair-items";
//import SideBarComp from "../components/SideBarComp"

export default function HairViews() {
    const hairItemsDisplay = hairItems.map((item) => {
        return(
            <ProductDisplayComp
                key={ item.id }
                itemImageLink={ item.itemImageLink }
                itemDescription={ item.itemDescription } />
        );
    });

    return (
        <div  className="h-full grid justify-items-stretch m-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* <SideBarComp /> */}
        { hairItemsDisplay }
            
        </div>
    )
}