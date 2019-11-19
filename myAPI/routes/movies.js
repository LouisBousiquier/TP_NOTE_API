const express = require('express');
const router = express.Router();

var _ = require('lodash');

//const hostname ="localhost";
//const port = 3000;

//let app=express();
//let port =8080;

//Creat database

let movies = [{
    name: "Forrest Gump",
    id: "0"
},
{
    name:"rpie",
    id:"1"
}];

//GET
router.get('/', (req,res)=>{
    res.status(200).json({movies})
});

//get by id
router.get('/:id',(req,res)=>{
    const { id } = req.params;
    const movie= _.find(movies, ["id",id]);
    res.status(200).json({
        message:'movie found!',
        movie
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
    res.json({ movies
    });
});

router.post('/:id',(req,res)=>{
    //get id of movie
    const{id}=req.params;
    //get the data of the movie to update
    const{name}=req.body;
    //find in bdd
    const movieToUpdate = _.find(movies, ["id",id]);
    //update data with new data
    movieToUpdate.name=name;
    //return message
    res.json({
        message:`Just update ${id} with ${name}`
    });
});

router.delete('/:id', (req,res)=>{
    //get id of movie
    const {id}=req.params;
    //remove frome bdd
    _.remove(movies,["id",id]);
    //return message
    res.json({
        message:`Just removed ${id}`,
        movies
    })
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