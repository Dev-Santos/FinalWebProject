const express = require('express');
const mongodb = require('mongodb');
const objectId = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const assert = require('assert');

const router = express.Router();
const mongo_url = 'mongodb+srv://Santos:Password1@webprojdb-9wiic.mongodb.net/test?retryWrites=true&w=majority';
const url = 'mongodb://localhost:27017/notepadItems';
const notes = require('../model/notes');


//Back-end routes
router.get("/", (req, res)=>{

    notes.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error)
        });    
});

// router.get("/:id", (req, res)=>{
//     const id = req.params.id;
    
//     notes.findById(id)
//         .then((data) => {
//             if(!data)
//                 res.status(404).send({ message: "Not found note with id " + id });
//             console.log('Data: ', data);
//             res.json(data);
//         })
//         .catch((error) => {
//             console.log('error: ', error)
//         });    
// });

router.delete('/delete', (req, res) => {
    const { id } = req.body;
    
    console.log("Received Id: ",req.body.params, objectId(id));
    
    notes.deleteOne({"_id": objectId(id)}, (error, data) => {
        console.log("Data found: ");
        if (error) {
            console.log('error in deleting!');
            throw error;
        } else {
            console.log('item has been deleted', data);
            res.status(204).json(data);
        }
    });
});


    // mongoose.connection.on('connected', function(err, db) {
    //     assert.equal(null, err);
    //     db.collection('notes'.find({"_id": new mongodb.ObjectId(id)},
    //     function(err, result) {
    //         assert.equal(null, err);
    //         console.log('Item deleted!!', result);
    //         db.close();
    //     }))
    // })

router.delete('/deleteAll', (req, res) => {
    // const { id } = req.body;
    const data = req.body;

    notes.deleteAll = (error, data) => {
        console.log("Data found: ", data);
        if (error) {
            console.log('error in deleting!');
            throw error;
        } else {
            console.log('item has been deleted', data);
            res.status(204).json(data);
        }
    };
});

// router.get(`/${note}`, (req, res)=>{

//     notes.find({ _id: { $in: } })
//         .then((data) => {
//             console.log('Data: ', data);
//             res.json(data);
//         })
//         .catch((error) => {
//             console.log('error: ', error)
//         });    
// });

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