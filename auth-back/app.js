const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/signup", require("./routes/singup"));
app.use("/api/singout", require("./routes/singout"));
app.use("/api/user", require("./routes/user"));
app.use("/api/todos", require("./routes/todos"));
app.use("/api/refreshtoken", require("./routes/refreshTocken"));
app.use("/api/login", require("./routes/login"));

app.get("/", (req,res)=>{
    res.send("Hola Mundo");
});

app.listen(port,()=>{
    console.log(`El servidor esta corriendo en el puerto: ${port}`)
});
