import InventoryListingItem from "./InventoryListingItem";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3005/',
  });
//instance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default function InventoryListing(props) {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const [inventory, setInventory] = useState([]);



    const myStyle = {
        margin: "0 auto",
        width: "30vw",
        border: "0.2vw solid black"
    };
    const buttonStyle = {
        width: "50%"
    }

    const allListingItems = []
    for (var i = 0; i < inventory.length; i++) {
        allListingItems[i] = <InventoryListingItem name={inventory[i].name} count={inventory[i].count} />;
    }


    // const allListingItems = inventory.map((name, count, _id) => {
    //     <div key={_id}>
    //         <InventoryListingItem count={count}/>
    //     </div>
    // })
    async function getAllItems() {
        try {
            const response = await instance.get('/inventory');
            console.log(response.data);
            setInventory(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(()=>{getAllItems();}, []);

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