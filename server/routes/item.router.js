const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// GET items
router.get('/', (req, res) => {

    const sqlText = `SELECT * FROM shopping;`;
    pool.query(sqlText)
        .then((result) => {
            console.log('got stuff back from the database', result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`error making database query, GET ${sqlText}`, error);
            res.sendStatus(500);
        })

})

//POST items
router.post('/', (req,res) => {
const item = req.body;
const sqlText = `INSERT INTO shopping ("name", "quantity", "unit", "purchased")
               VALUES ($1, $2)`;

    pool.query(sqlText, [item.name, item.quantity, item.unit, item.purchased])
        .then((result) => {
            console.log('Add item to database', item);
            res.sendStatus(201);
        })
        .catch((error) =>{
            console.log(`Error making database query ${sqlText}`, error);
            res.sentStatus(500);
        })

})

//DELETE items


//POST items



module.exports = router;