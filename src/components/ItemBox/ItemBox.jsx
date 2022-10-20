import axios from "axios";

function ItemBox({itemList, getItems}){
    // {itemList.map(item => )}
    // console.log('the item id is', itemList[0].id)

    const deleteItem = (evt) => {
        console.log('in deleteItem function', evt.target.id);
        let itemId = evt.target.id
        axios.delete(`/items/${itemId}`)
            .then((response) => {
                console.log('the delete response is', response)
                getItems();
            })
    }

    return(
        <>
        {itemList.map(item => (
            <div 
                className="listItem"
                key={item.id}       
            >
                <h4>{item.name} </h4>
                <p>{item.quantity} </p>
                <p>{item.unit}</p>
                <button className="purchasedBtn">Purchased</button>
                <button 
                className="removeBtn" 
                id = {item.id}
                onClick = {deleteItem}>Remove</button>
                
                    
            </div>
        ))}
        </>
    );
}

export default ItemBox;