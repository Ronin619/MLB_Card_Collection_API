require('dotenv').config({path: "./.env.local"});
const express = require("express");
const app = express();
const cors = require("cors");
const db = require('./db/knex'); 
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// CRUD OPERATIONS

//GET

app.get("/batters", async (req, res) => {
    try { const result = await db("batters")
        .select("*")
        .from("batters");
        res.send(result); 
    } catch (err) {
        console.error(err);
    } 
})

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

app.patch('/api/updateBatters/:id', async (req, res) => {
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

app.delete('/api/batters/:id', async (req, res) => {
    try {
        db('batters').where({id: req.params.id}).del()
        .then(function() {res => res.json({success: true})})
    } catch (err) {
        console.error(err);
        res.status(500);
    }
})

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
    });

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});