const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// GET items


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