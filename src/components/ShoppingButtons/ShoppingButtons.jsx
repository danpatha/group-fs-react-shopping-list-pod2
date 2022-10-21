import axios from 'axios';

function ShoppingButtons({getItems}){

    const resetItems = () => {
        axios.put('/items')
        .then((response) => {
            console.log(response)
            getItems();
        })
        .catch((err) => {
            alert('error in reset PUT')
            console.log(err);
        });
    }



    return (
    <header>
        <h2>Shopping List</h2>
        <button 
            id="resetBtn"
            onClick={resetItems}
        >Reset</button>
        <button id="clearBtn">Clear</button>
    </header>
    )
}

export default ShoppingButtons;