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

                getItems={getItems}
                itemList={itemList} 

                />   
            </section>
        </>
    );
}

export default ItemList;
