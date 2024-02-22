const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sample_mean_db"
});

connection.connect((err) => {
    if(err) throw err;
    console.log("Connected")
});

let saved_samples_arr = [
    {
        sample_title: "Saved Sample 1",
        sample_date: "Monday, 2023-11-27",
        sample_data: [1,2,3]
    },
    {
        sample_title: "Saved Sample 2",
        sample_date: " Sunday, 2023-11-26",
        sample_data: [4,5,6]
    },
    {
        sample_title: "Saved Sample 3",
        sample_date: " Sunday, 2023-14-26",
        sample_data: [7,8,9]
    },]


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
