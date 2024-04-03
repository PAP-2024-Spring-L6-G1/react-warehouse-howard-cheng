import InventoryListingItem from "./InventoryListingItem";
import React, { useState } from 'react';

export default function InventoryListing(props) {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const myStyle = {
        margin: "0 auto",
        width: "30vw",
        border: "0.2vw solid black"
    };
    const buttonStyle = {
        width: "50%"
    }

    const allListingItems = []
    for (var i = 0; i < 50; i++) {
        allListingItems[i] = <InventoryListingItem count={i} />;
    }
    const visibleListingItems = allListingItems.slice(currentPageIndex, currentPageIndex + props.maxVisible)


    function previousPage() {
        if (currentPageIndex > 0) {
            setCurrentPageIndex(currentPageIndex - props.maxVisible);
        }
    }

    function nextPage() {
        if (currentPageIndex + props.maxVisible < allListingItems.length) {
            setCurrentPageIndex(currentPageIndex + props.maxVisible);
        }
    }

    return (
        <div style={myStyle}>
            {visibleListingItems}
            <button onClick={previousPage} style={buttonStyle}>Previous</button>
            <button onClick={nextPage} style={buttonStyle}>Next</button>
        </div>

    );
}