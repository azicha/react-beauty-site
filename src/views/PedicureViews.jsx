import React from "react";
import ProductDisplayComp from "../components/ProductDisplayComp";
import manicureItems from "../data/manicure-items";

export default function HomeViews() {
    const maniCureItemsDisplay = manicureItems.map((item) => {
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
            { maniCureItemsDisplay }
        </div>
    )
}