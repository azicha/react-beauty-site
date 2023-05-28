import React from "react";
// import ProductDisplayComp from "../components/ProductDisplayComp";
// import manicureItems from "../data/manicure-items";

export default function HomeViews() {
    // const maniCureItemsDisplay = manicureItems.map((item) => {
    //     return(
    //         <ProductDisplayComp
    //             key={ item.id }
    //             itemName={ item.itemName }
    //             itemImageLink={ item.itemImageLink }
    //             itemDescription={ item.itemDescription } />
    //     );
    // });

    return (
        <div className="bg-gray-400 h-screen  flex flex-col">
            {/* { maniCureItemsDisplay } */}
            <h1 className="text-lg font-bold text-center">Welcome Home</h1>
            <h2 className="text-lg font-bold text-center">Shop With Us</h2>
        </div>
    )
}
