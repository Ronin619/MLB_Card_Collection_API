require('dotenv').config({path: ".env.local"});
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db/knex.js");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// CRUD OPERATIONS

//GET

// app.get("/pitchers", async (req, res) => {
//     try { const result = await db("pitchers")
//             .select("*")
//             .from("pitchers");
//             res.send(result); 
//     } catch (err){
//         console.error(err);
//         }
// })

app.get("/batters", async (req, res) => {
    try { const result = await db("batters")
        .select("*")
        .from("batters");
        res.send(result); 
    } catch (err) {
        console.error(err);
    } 
})

// POST

//     app.post('/addPitchers', async (req, res) => {
//     try {
//         const body = req.body
//         const data = await db('pitchers').returning("*").insert(body)
//         res.send(data);
//     } catch(err) {
//         console.error(err);
//     }
//  });

app.post('/api/addBatters', async (req, res) => {
    try {
        const body = req.body
        const data = await db('batters').returning("*").insert(body)
        res.send(data);
    } catch(err) {
        console.error(err);
    }
});

// PATCH

app.patch('/api/batters/:id', async (req, res) => {
    try {
        const id = req.params.id
        const { AVG, HR, RBI, OPS, image } = req.body

        const data = await db('batters')
        .returning("*")
        .where({"id": id}).update({AVG, HR, RBI, OPS, image})
        res.status(201).send(data);
    } catch (err) {
        console.error(err);
        res.status(500);
    }
})

// DELETE

app.delete('/api/batters/:last_name', async (req, res) => {
    try {
        const lastName = req.params.last_name
        const data = await db('batters')
            .returning("last_name")
            .where({"last_name": lastName})
            .del();
        res.status(201).send(data);
    } catch (err) {
        console.error(err);
        res.status(500);
    }
})



app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});