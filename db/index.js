const mysql = require('mysql')


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'null',
    database : 'aerobase'
});

// connect to mysql
connection.connect(function(err) {
    // in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});

const getRandomNSN = 'SELECT * from MyTable LIMIT 15';

connection.query(getRandomNSN, function(err, rows, fields) {
    if(err){
        console.log("An error ocurred performing the query.");
        return;
    }

    console.log("Query succesfully executed: ", rows);
});

const getNSN = 'SELECT id from MyTable WHERE username = $1';

connection.query(getNSN, function(err, rows, fields) {
    if(err){
        console.log("An error ocurred performing the query.");
        return;
    }

    console.log("Query succesfully executed: ", rows);
});


// Close the connection
connection.end(function(){
    // The connection has been closed
});

module.exports ={
    getRandomNSN,
    getNSN
}

