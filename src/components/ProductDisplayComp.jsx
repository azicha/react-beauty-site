import React from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Skeleton from '@mui/material/Skeleton';

export default function ProductDisplayComp(props) {
    const [imageLoading, setImageLoading] = React.useState(true);

    function imageLoadedSuccessfully() {
        console.log("Image loaded sucesfully...");
        setImageLoading(prevState => !prevState);
    }

    return (
        <div className="w-[95%] mb-4 h-fit rounded-md border-[1px] shadow-md p-2 relative">
            <h1 className="text-xl">{ props.itemName }</h1>
            <img 
                src={ props.itemImageLink } 
                alt="foundation-image" 
                className="rounded-md shadow-md object-cover w-[100%] h-48"
                onLoad={ () => { imageLoadedSuccessfully() } } />
            { imageLoading && <Skeleton variant="rectangular" width={338} height={192} sx={{ bgcolor: 'info' }} className="absolute z-20 top-9 rounded-md" /> }
            
            <p className="mt-2">
                { props.itemDescription } 
            </p>
            <div className="flex justify-end">
                <Button 
                    variant="contained"
                    endIcon={<SendIcon />} 
                    disableElevation>
                    Add To Cart
                </Button>
            </div>
        </div>
    );
}