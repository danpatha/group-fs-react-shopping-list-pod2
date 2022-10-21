import axios from "axios";


function ItemBox({itemList, getItems}){
    // {itemList.map(item => )}
    // console.log('the item id is', itemList[0].id)

    const purchaseItem  = (evt) =>{
        axios.put(`/items/${evt.target.id}`)
        .then((response) => {
            console.log(response);
            getItems();
        })
        .catch(err => {
            alert('Error in purchasing Item');
            console.log(err);
        });
    }
    const deleteItem = (evt) => {
        console.log('in deleteItem function', evt.target.id);
        let itemId = evt.target.id
        axios.delete(`/items/${itemId}`)
            .then((response) => {
                console.log('the delete response is', response)
                getItems();
            })
            .catch(err=>{
                console.error('in delete item error');
            });
    }

    return(
        <>
        {itemList.map(item => {
            if(item.purchased === false){
                return (
            <div 
                className="listItem"
                key={item.id}       
            >
                <h4>{item.name} </h4>
                <p>{item.quantity} {item.unit}</p>
                <button 
                id={item.id}
                onClick={purchaseItem}
                className="purchasedBtn"
                >Purchased</button>
                <button 
                className="removeBtn" 
                id = {item.id}
                onClick = {deleteItem}>Remove</button>
            </div>
        )};
        return(
                <div 
                    key={item.id} 
                    className="green"      
                >
                    <h4><strike>{item.name}</strike></h4>
                    <p><strike>{item.quantity} {item.unit}</strike></p>
                    <button 
                className="removeBtn" 
                id = {item.id}
                onClick = {deleteItem}>Remove</button>
                </div>
            );
        })}
        </>
    );
}

export default ItemBox;