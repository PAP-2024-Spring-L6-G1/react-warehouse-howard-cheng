import './InventoryListingItem.css'

export default function InventoryListingItem() {
    return (
        <div className='listing-item'>
            <span className="listing-item-name">Socks</span><span className="listing-item-count">10</span>
        </div>
    );
}