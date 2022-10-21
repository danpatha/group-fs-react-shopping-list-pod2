import ItemBox from '../ItemBox/ItemBox'
import ShoppingButtons from '../ShoppingButtons/ShoppingButtons';

function ItemList({itemList, getItems}){

    return(
        <>
            <ShoppingButtons getItems = {getItems}/>
            <section>
                <ItemBox

                getItems={getItems}
                itemList={itemList} 

                />
                <div className="listItem">
                    <h4>Apple Jacks</h4>
                    <p>3 boxes</p>
                    <button className="purchasedBtn">Purchased</button>
                    <button className="removeBtn">Remove</button>
                </div>      
            </section>
        </>
    );
}

export default ItemList;
