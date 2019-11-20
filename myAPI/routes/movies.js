const express = require('express');
const router = express.Router();
const axios = require("axios");

API_URL="http://www.omdbapi.com/";
API_KEY="d9e63691";

var _ = require('lodash');
/*
const titles=null;
const released=null;
const runtime=null;
const actors=null;
const poster=null;
const boxoffice=null;
const ratings= null;*/
let movies=[/*
            {"Titles:":titles},
            {"Released:":released},
            {"Runtime:":runtime}*/


]
//GET with axios
/*router.get("/",(req,res,next)=>{
axios.get(`${API_URL}?t=inception&apikey=${API_KEY}`).then(data=>{
    const id= _.uniqueId();
    const {list}=data;
    const movie= [id,list.Title,list.Released,list.Runtime
    ,list.Actors, list.Poster, list.BosOffice, list.Ratings[2].value];
    res.status(200).json({movie});
});
})*/

/*
//GET by name with axios
router.get("/",(req,res,next)=>{
    const {title}= req.body;
    axios.get(`${API_URL}?t=${title}&apikey=${API_KEY}`).then(({data})=>{
        const id= _.uniqueId();
        
        const list=[id,data.Title,data.Released,data.Runtime
            ,data.Actors, data.Poster, data.BoxOffice, data.Ratings[1].Value];
        res.status(200).json({movies})
     } );
    })
*/

//GET all the movies added
router.get("/",(req,res,next)=>{

        res.status(200).json({message:"Display of the BD", movies})
    })

    //PUT a new movie by name in "movies"
    router.put("/",(req,res,next)=>{
        const {title}= req.body;
        axios.get(`${API_URL}?t=${title}&apikey=${API_KEY}`).then(({data})=>{
            const id= _.uniqueId();
            titles=data.Title;
            released=data.Released;
            runtime=data.Runtime;
            actors=data.Actors;
            poster=data.Poster;
            boxoffice=data.BoxOffice;
            rating=data.Ratings[1].Value;
            const list={"id":id,"Title":titles,"Released":released,"Runtime":runtime,"Actors":actors,
            "Posters":poster,"BoxOffice":boxoffice,"Ratings":rating}
            movies.push(list)
            res.status(200).json({movies, message:`movie ${title} added to the BD`})
         } );
        })

        router.post("/:id",(req,res,next)=>{
            //get id of movie
            const{id}=req.params;
            const {title}= req.body;
            //find in bdd
            const movieToUpdate = _.find(movies, ["id",id]);
            //update data with new data
            movieToUpdate.Title=title;

                res.status(200).json({movies, message:`movie ${title} added to the BD`})
             
            })

/*
const hostname ="localhost";
const port = 3000;

let app=express();
let port =8080;

let movies = [{
    name: "Forrest Gump",
    id: "0"
}];

//GET with router
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
*/

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
module.exports =router;