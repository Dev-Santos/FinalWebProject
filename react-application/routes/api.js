const express = require('express');
const objectId = require('mongodb').ObjectID;
const mongoose = require('mongoose');

const router = express.Router();

const notes = require('../model/notes');

const db = mongoose.connection;
console.log('Database info: ');


//[Back-end routes]

//Returns data from mongodb to fill checklist
router.get("/", (req, res)=>{

    notes.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.status(200).json(data);
        })
        .catch((error) => {
            console.log('error: ', error)
        });    
});


//Used to delete a single note from the mongodb notes
router.delete('/delete', (req, res) => {
    const { id } = req.body;
    
    console.log("Received Id: ",req.body.params, objectId(id));
    
    notes.deleteOne({"_id": objectId(id)}, (error, data) => {
        console.log("Data found: ");
        if (error) {
            console.log('Error in deleting!');
            throw error;
        } else {
            console.log('Item has been deleted', data);
            res.status(204).json(data);
        }
    });
});

//Function used to clear all notes made by the user
router.delete('/deleteAll', (req, res) => {
    // const { id } = req.body;
    const data = req.body;

    notes.deleteAll = (error, data) => {
        console.log("Data found: ", data);
        if (error) {
            console.log('Error in deleting!');
            throw error;
        } else {
            console.log('Item has been deleted', data);
            res.status(204).json(data);
        }
    };
});

//Route used to save a note to mongodb
router.post('/save', (req, res)=>{
    const data = req.body;

    const newNote = new notes(data);
    newNote.save((error) => {
        if(error) {
            res.status(500).json({ msg: 'Internal server error, could not add data' });
            return;
        }        
        res.json({
            msg: 'Your data was added to the database...'
        });
    });    
});

router.get("/notes", (req, res)=>{
    const data = {
        username: 'items test page',
        testNum: 777
    };
    res.json(data);
});


module.exports = router;