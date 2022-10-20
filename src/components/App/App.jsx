import React from 'react';

import ItemForm from '../ItemForm/ItemForm';
import ItemList from '../ItemList/ItemList';
import Header from '../Header/Header.jsx';
import './App.css';


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <ItemForm 
                    // addItem={addItem}
                />

                <ItemList 
                    // itemList={itemList}
                />

            </main>
        </div>
    );
}

export default App;
