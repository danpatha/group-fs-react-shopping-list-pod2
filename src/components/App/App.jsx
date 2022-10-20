import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';
import ItemForm from '../ItemForm/ItemForm';
import ItemList from '../ItemList/ItemList';
import Header from '../Header/Header.jsx';
import './App.css';



function App() {
    let [itemList, setItemList] = useState([]);


    useEffect(() => {
        getItems()
    }, [])

    const getItems = () => {
        axios.get('/items')
            .then(response => {
                console.log('the response is', response)
                setItemList(response.data)
            })
            .catch(error => {
                console.log('GETting itemlist failed', error);
            })
    }

    const addItem = (newItem) =>{
        axios.post('/items', newItem)
        .then(response => {
            
            getItems();
        })
        .catch(err => {
            alert('Error Adding Item');
            console.log(err);
        })
    };


    return (
        <div className="App">
            <Header />
            <main>
                <ItemForm addItem = {addItem} />
                <h2>Add an Item</h2>
                <form>
                    <label>Item</label>
                    <input type="text" required placeholder="Item"></input>

                    <label>Quantity</label>
                    <input type="text" required placeholder="Quantity needed"></input>

                    <label>Unit</label>
                    <input type="text" required placeholder="Unit"></input>
                </form>

                <article>
                <ItemList />
                    <header>
                        <h2>Shopping List</h2>
                        <button id="resetBtn">Reset</button>
                        <button id="clearBtn">Clear</button>
                    </header>

                    <section>
                        <div class="listItem">
                            <h4>Pineapple</h4>
                            <p>5 lbs</p>
                            <button class="purchasedBtn">Purchased</button>
                            <button class="removeBtn">Remove</button>
                        </div>
                        <div class="listItem">
                            <h4>Apple Jacks</h4>
                            <p>3 boxes</p>
                            <button class="purchasedBtn">Purchased</button>
                            <button class="removeBtn">Remove</button>
                        </div>
                    </section>
                </article>
            <footer>
                <p>Created by Pod 2 on October 20th, 2022 at Prime Digital Academy</p>
                <p>Copywrite: 2022</p>
            </footer>
            </main>
        </div>
    );
}

export default App;
