import axios from "axios";

function ShoppingButtons({getItems}){


    const deleteAll = () => {
        console.log('in deleteAll function');
        axios.delete('/items')
            .then((response) => {
                console.log('the response from delete all is', response)
                getItems()
            })
            .catch((error) => {
                console.log('deleting all items failed axios', error)
            })

    }

    return (
    <header>
        <h2>Shopping List</h2>
        <button id="resetBtn">Reset</button>
        <button id="clearBtn" onClick = {deleteAll}>Clear</button>
    </header>
    )
}

export default ShoppingButtons;