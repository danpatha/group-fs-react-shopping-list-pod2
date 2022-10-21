import ItemBox from '../ItemBox/ItemBox'
import ShoppingButtons from '../ShoppingButtons/ShoppingButtons';

function ItemList({itemList, getItems}){

    return(
        <>
            <ShoppingButtons />
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
