const mongoose = require('mongoose');

const mongoDB_URI = 'mongodb+srv://Santos:Password1@webprojdb-9wiic.mongodb.net/WebProject?retryWrites=true&w=majority'

mongoose.connect(mongoDB_URI || 'mongodb://localhost:27017/notepadItems', { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
}, (error)=>{
    if(!error){
        console.log("Successful connection to the database...");
    }else{
        console.log('Error connecting to the database...');
    }
});

// const Items = require("./listItem.model");