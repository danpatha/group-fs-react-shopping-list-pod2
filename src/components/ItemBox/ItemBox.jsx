

function ItemBox({itemList}){

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
                <button className="removeBtn">Remove</button>
            </div>
        ))}
        </>
    );
}

export default ItemBox;