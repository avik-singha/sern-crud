const express = require("express");
const appRouter = require("./routes/index");
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 4000;


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/employeezone",appRouter);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});