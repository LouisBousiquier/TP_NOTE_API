const express = require('express');
const router = express.Router();

//const hostname ="localhost";
//const port = 3000;

//let app=express();
let port =8080;

//Creat database

let movies = [{
    name: "Forrest Gump",
    id: "0"
}];

//GET
router.get('/', (req,res)=>{
    res.status(200).json({movies})
});
//get by id
router.get('/:id',(req,res)=>{
    const { id } = req.params;
    const name=_.find(movies, ["id",id]);
    res.status(200).json({
        message:'movie found!',
        name
    });
});

router.put('/', (req,res)=>{
    //get data from request
    const {name}=req.body;
    //creat new id
    const id= _.uniqueId();
    // insert in array
    movies.push({name, id});
    //return message
    res.json({
        message: `just added ${id}`,
        name: {name,id}
    });

});

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