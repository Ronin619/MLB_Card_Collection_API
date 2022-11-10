const express = require("express");
const app = express();
const knex = require("./db/knex");
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});