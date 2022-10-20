import ItemBox from '../ItemBox/ItemBox'

function ItemList({itemList, getItems}){

    return(
        <>
            <header>
                <h2>Shopping List</h2>
                <button id="resetBtn">Reset</button>
                <button id="clearBtn">Clear</button>
            </header>
            <section>
                <ItemBox
                itemList={itemList}
                getItems={getItems}
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
