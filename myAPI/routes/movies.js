var express = require('express');
var router = express.Router();

//const hostname ="localhost";
//const port = 3000;

//const app=express();

//Creat database

let movies =[{
    name: "Forrest Gump",
    id: 0
}];

/* GET*/
router.get('/', (req,res)=>{
    res.status(200).json({movies});
});

/* PUT */
router.put('/new', function(req,res, next){
    res.send('respond with a resource')
});

/*
/// PUT
app.put('/',(req,res)=>{
    res.json({
        req: req.method,
        data: "this is a put"
    });
});*/
module.exports =router;