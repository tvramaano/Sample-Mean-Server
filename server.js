const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const  connection = mysql.createConnection({
    host: "hostname",
    user: "username",
    password: "password",
    database: "databasename"
});

connection.connect((err) => {
    if(err) throw err;
    console.log("Connected")
});

app.use(cors())
app.use(express.json())

app.get('/savedSamples', (req,res) =>{
    connection.query('SELECT * FROM saved_sample_mean_tbl',(error,results,fields) =>{
        if(error) throw error;
        console.log(results)
        res.send(JSON.stringify(results));
    });
     
});


app.listen(8000, () =>{
    console.log("Server is running on port 8000")
});
