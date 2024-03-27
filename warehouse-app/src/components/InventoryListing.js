import InventoryListingItem from "./InventoryListingItem";

export default function InventoryListing() {
    const myStyle = {
        margin: "0 auto",
        width: "30vw",
        border: "0.2vw solid black"
    };
    return (
        <div style = {myStyle}>
            <InventoryListingItem/>
            <InventoryListingItem/>
            <InventoryListingItem/>
            <InventoryListingItem/>
            <InventoryListingItem/>
            <InventoryListingItem/>
            <InventoryListingItem/>
            <InventoryListingItem/>
            <InventoryListingItem/>
            <InventoryListingItem/>
        </div>
    );
}