import React from "react";
import ProductDisplayComp from "../components/ProductDisplayComp";
import facialItems from "../data/facial-items";

export default function HomeViews() {
    const facialItemsDisplay = facialItems.map((item) => {
        return(
            <ProductDisplayComp
                key={ item.id }
                itemName={ item.itemName }
                itemImageLink={ item.itemImageLink }
                itemDescription={ item.itemDescription } />
        );
    });

    return (
        <div className="h-full grid justify-items-stretch m-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            { facialItemsDisplay }
        </div>
    )
}