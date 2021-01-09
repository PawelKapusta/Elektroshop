import  express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from 'mysql'

const app = express();

var connection = mysql.createConnection({
    //properties
    host: "localhost",
    user: "root",
    password: '',
    database: "interfejsy",
});


connection.connect(function(error) {
    if(!!error){
        console.log("Database connection error");
    }else{
        console.log("Database connected");
    }
});


app.get('/getAllProducts', (request, response) => {         //Pobieranie danych dostępnych w bazie
    connection.query("SELECT * FROM products ORDER BY id;",function(error,rows,fields){
        if(!!error){
            console.log("Error in the query");
        }else{
            console.log("Database read");
            response.send(rows);
            console.log(rows);
        }
    })
});

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());



app.get('/', (req,res) => {
    res.send("Henlo");
});

app.listen(3001, () => {
    console.log("Running on port 3001");
})