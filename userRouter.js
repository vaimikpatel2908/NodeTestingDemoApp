var router=require('express').Router();

var sql = require('mssql');

const config = {
    user: 'sa',
    password: 'vaimikpatel2908',
    server: 'localhost\\SQLEXPRESS', // You can use 'localhost\\instance' to connect to named instance
    database: 'school',
    // options: {
    //     encrypt: true // Use this if you're on Windows Azure
    // }
}

         

router.get('/',(req,res)=>{
    var users;
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from admission', function (err, recordset) {
            
            if (err) console.log(err)

            console.log(recordset.recordset);
            // send records as a response
            res.send(recordset.recordset);
            sql.close();
        });
    });
});


router.get('/User',(req,res)=>{
    res.send('user router index method executed');
});


router.get('/Login',(req,res)=>{
    res.send('user router Login page executed');
});


router.post('/Login',(req,res)=>{
    res.send('user router Login page executed');
});
module.exports=router;