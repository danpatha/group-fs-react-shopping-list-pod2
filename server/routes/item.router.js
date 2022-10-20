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


//DELETE items


//POST items



module.exports = router;