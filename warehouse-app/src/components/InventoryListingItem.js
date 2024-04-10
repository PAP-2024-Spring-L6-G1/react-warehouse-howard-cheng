import './InventoryListingItem.css'

export default function InventoryListingItem(props) {
    return (
        <div className='listing-item'>
            <span className="listing-item-name">{props.name}</span><span className="listing-item-count">{props.count}</span>
        </div>
    );
}