import axios from 'axios';

function ShoppingButtons({getItems}){

    const sweetAlertClear = () => {
        swal({
            title: "Your list has been cleared!",
            icon: "success",
            button: "Ok",
          });
    }


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

    const deleteAll = () => {
        console.log('in deleteAll function');
        axios.delete('/items')
            .then((response) => {
                console.log('the response from delete all is', response)
                getItems()
                sweetAlertClear();
            })
            .catch((error) => {
                console.log('deleting all items failed axios', error)
            })

    }


    return (
    <header>
        <h2>Shopping List</h2>

        <button 
            id="resetBtn"
            onClick={resetItems}
        >Reset</button>
        <button id="clearBtn" onClick = {deleteAll}>Clear</button>

    </header>
    )
}

export default ShoppingButtons;