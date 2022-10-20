import { useState } from 'react';

function ItemForm({addItem}){
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('');

    const handleSubmit = (evt)=>{
        evt.preventDefault();
        addItem({
            name: item,
            quantity: quantity,
            unit: unit,
        });
    }

    return(
        <>
            <h2>Add an Item</h2>
            <form onSubmit={handleSubmit}>
                <label>Item</label>
                <input onChange={(event)=> setItem(event.target.value)}type="text" required placeholder="Item"></input>

                <label>Quantity</label>
                <input onChange={(event)=> setQuantity(event.target.value)} type="text" required placeholder="Quantity needed"></input>

                <label>Unit</label>
                <input onChange={(event)=> setUnit(event.target.value)} type="text" required placeholder="Unit"></input>
                <button type="submit">Add Item</button>
            </form>
        </>
    );
}

export default ItemForm;