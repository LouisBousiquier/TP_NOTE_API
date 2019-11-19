const express = require('express');
const router = express.Router();

//const hostname ="localhost";
//const port = 3000;

//let app=express();
let port =8080;

//Creat database

let movies = [{
    name: "Forrest Gump",
    id: 0
}];

//GET
router.get('/', (req,res)=>{
    res.status(200).json({movies})
})

router.use(port,()=>{
    console.log('serveur ok')
})

/*
/// PUT
app.put('/',(req,res)=>{
    res.json({
movies
    });
});

app.listen(port,()=> {
    console.log('le serveur foctionne')
})
*/
/*
// GET
router.get('/', (req,res)=>{
    res.status(200).json({movies});
});

/// PUT 
router.put('/', function(req,res, next){
    res.send('respond with a resource')
});

*/

/*
*/
module.exports =router;