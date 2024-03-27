import InventoryListingItem from "./InventoryListingItem";

export default function InventoryListing(props) {
    const myStyle = {
        margin: "0 auto",
        width: "30vw",
        border: "0.2vw solid black"
    };
    const allListingItems = []
    for (var i = 0; i < 50; i++) {
        allListingItems[i] = <InventoryListingItem/>;
    } 
    const visibleListingItems = allListingItems.slice(0, props.maxVisible)
    return (
        <div style = {myStyle}>
            {visibleListingItems}
        </div>
    );
}