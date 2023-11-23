var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Concert = require('../models/Bio_concert');

module.exports.DislayConcertlist = async (req,res,next)=>{ //< Mark function as async
    try{
       const ConcertList = await Concert.find(); //< Use of await keyword
       res.render('concert/list', {
          title: 'Concert List', 
          ConcertList: ConcertList
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('concert/list', {
          error: 'Error on server'
       });
    }
 };

 module.exports.AddConcert = async (req,res,next)=>{
    try{
        res.render('concert/add',
        {
            title:'Add Concert'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('concert/list',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.ProcessConcert = async (req,res,next)=>{
    try{
        let newConcert = Concert({
            "Artist":req.body.Artist,
            "Genre": req.body.Genre,
            "Venue": req.body.Venue,
            "Date": req.body.Date,
            "Ticket_Price": req.body.Ticket_Price,
            "Start_Time": req.body.Start_Time
        });
        Concert.create(newConcert).then(() =>{
            res.redirect('/concertslist')
        })
    }
    catch(error){
        console.error(err);
        res.render('concert/list',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.EditConcert = async (req,res,next)=>{
    try{
    const id = req.params.id;
    const concertToEdit = await Concert.findById(id);
    res.render('concert/edit',
    {
        title:'Edit Concert',
        Concert:concertToEdit
    })
}
catch(error){
    console.error(err);
    res.render('concert/list',
    {
        error: 'Error on the server'
    });
}
}

module.exports.ProcessEditConcert = (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedConcert = Concert({
            "_id":id,
            "Artist":req.body.Artist,
            "Genre": req.body.Genre,
            "Venue": req.body.Venue,
            "Date": req.body.Date,
            "Ticket_Price": req.body.Ticket_Price,
            "Start_Time": req.body.Start_Time
        });
        Concert.findByIdAndUpdate(id,updatedConcert).then(()=>{
            res.redirect('/concertslist')
        });
    }
    catch(error){
        console.error(err);
        res.render('concert/list',
        {
            error: 'Error on the server'
        });
    }
}

module.exports.DeleteConcert = (req,res,next)=>{
    try{
        let id = req.params.id;
        Concert.deleteOne({_id:id}).then(() =>
        {
            res.redirect('/concertslist')
        })
    }
    catch(error){
        console.error(err);
        res.render('concert/list',
        {
            error: 'Error on the server'
        });
    }
}