const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// GET items
router.get('/', (req, res) => {

    const sqlText = `SELECT * FROM "shopping" ORDER BY purchased ASC, UPPER (name) ASC;`;
    pool.query(sqlText)
        .then((result) => {
            // console.log('got stuff back from the database', result);
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
const sqlText = `INSERT INTO shopping ("name", "quantity", "unit")
               VALUES ($1, $2, $3)`;

    pool.query(sqlText, [item.name, item.quantity, item.unit])
        .then((result) => {
            console.log('Add item to database', item);
            res.sendStatus(201);
        })
        .catch((error) =>{
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })

})

//DELETE items
router.delete('/:id', (req, res) => {
    const sqlText =` DELETE FROM "shopping"
                    WHERE id = $1`;
    const sqlParams = [req.params.id];

    pool.query(sqlText, sqlParams)
        .then((dbRes) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('error in delete', err);
            res.sendStatus(500);
        });
})


// DELETE all 
router.delete('/', (req, res) => {
    const sqlText = `DELETE FROM "shopping";`;
    
    pool.query(sqlText)
        .then((dbRes) => {
            console.log('db res is from deleting all is', dbRes)
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('deleting all items failed', err);
            res.sendStatus(500);
        })
})


//PUT items
router.put('/:id', (req,res) => {
    const purchased = req.params.id;
    const sqlText = `UPDATE "shopping"
                SET "purchased" = TRUE
                WHERE "id" = $1`;
                pool.query(sqlText, [purchased])
                    .then((dbRes) => {
                        res.sendStatus(201)
                    })
                    .catch(err=>{
                    console.log('in /:id PUT', error);
                    res.sendStatus(500);
                    });
})

//RESET ITEMS
router.put('/', (req, res) => {
    const sqlText = `UPDATE "shopping" 
                    SET "purchased" = FALSE
                    WHERE "purchased" = TRUE;`
            pool.query(sqlText)
                .then((dbRes) =>{
                    res.sendStatus(201);
                })
                .catch((err) => {
                    console.log('in /PUT', err)
                    res.sendStatus(500);
                });
})


module.exports = router;