const express = require('express');

const PORT =process.env.PORT || 3001;

const app = express();
const mysql = require('mysql2');

// express middleware


app.use(express.urlencoded({extended: false}));
app.use(express.json());

//  app.get('/',(req,res) =>{
//    res.json({ message: 'Hello world'});
//  });
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

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//   console.log(rows);
// });

// db.query(`SELECT * FROM candidates WHERE id=1`, (err,row) =>{
//   if(err){
//     console.log(err);
//   }
//   console.log(row);
// });


// ====================
// Delete a candidate
// =====================
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });
// ============================
// >>>>>>>>>>>>>create a candidate
// ============================
const sql = `INSERT INTO candidates(id,first_name,last_name,industry_connected)
VALUES (?,?,?,?)`;
const params = [1,'Ronald','Firbank',1];
db.query(sql,params,(err,result) =>{
  if(err){
    console.log(err);
  }
  console.log(result);
});


// =================
// 404 error
// ================
app.use((req,res)=>{
  res.status(404).end();
})


app.listen(PORT,()=>{
  console.log(`server running on port ${PORT}`);
})