import React from 'react';
import { useState, useEffect} from 'react';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    let [itemList, setItemList] = useState([]);


    useEffect(() => {
        getItems()
    }, [])

    const getItems = () => {
        axios.get('/items')
            .then(response => {
                setItemList(response.data)
            })
            .catch(error => {
                console.log('GETting itemlist failed', error);
            })
    }


    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
