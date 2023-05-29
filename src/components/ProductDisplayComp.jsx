import React from "react";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import SendIcon from '@mui/icons-material/Send';
import Skeleton from '@mui/material/Skeleton';

export default function ProductDisplayComp(props) {
    const [imageLoading, setImageLoading] = React.useState(true);

    function imageLoadedSuccessfully() {
        console.log("Image loaded sucesfully...");
        setImageLoading(prevState => !prevState);
    }

    const [isShown, setIsShown] = React.useState(false)
    
    function showButton() {
        console.log("Appropriate button is shown");
        setIsShown(prevShown => !prevShown);
    }

    return (
        <div className="w-[95%] mb-4 h-[100%] rounded-md border-[1px] shadow-md p-2 relative">
            <h1 className="text-xl">{ props.itemName }</h1>
            <img 
                src={ props.itemImageLink } 
                alt="foundation-image" 
                className="rounded-md shadow-md object-cover w-[100%] h-80"
                onLoad={ () => { imageLoadedSuccessfully() } } />
            { imageLoading && <Skeleton variant="rectangular" width={338} height={192} sx={{ bgcolor: 'info' }} className="absolute z-20 top-9 rounded-md" /> }
            
            <p className="mt-2">
                { props.itemDescription } 
            </p>
            <div className="flex justify-end">
                <Button 
                    variant="contained"
                    endIcon={<ShoppingCartIcon />} 
                    disableElevation
                    onClick={ () => {showButton() } } >
                    { isShown ? "Remove from Cart" : "Add To Cart" } 
                </Button>
            </div>
        </div>
    );
}