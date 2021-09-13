const express = require('express');

const PORT =process.env.PORT || 3001;

const app = express();
const mysql = require('mysql2');

// express middleware


app.use(express.urlencoded({extended: false}));
app.use(express.json());


// code to connect database here

const db = mysql.createConnection(
  {
    host: 'localhost',
    // mysql username
    user: 'root',
    // mysql password
    password: 'Quality8055]',
    database: 'election'
  },
  console.log('connected to election database')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});



// 404 error
app.use((req,res)=>{
  res.status(404).end();
})


app.listen(PORT,()=>{
  console.log(`server running on port ${PORT}`);
})