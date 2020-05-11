const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 8080;

//Connection file
const connection = require("./model/connection");

//Routes
const routes = require('./routes/api');

mongoose.connection.on('connected', () => {
    console.log('Mongooose is connected!!');
});

//Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

//HTTP request logger
app.use(morgan('tiny'));

app.use('/api', routes);


app.use(bodyParser.urlencoded({
    extended: true
}));


app.listen(port, console.log(`Server started on port: ${port}`));


// app.use(express.json());

//Imported database connection object 
// const db = require('./config/database');

//Imported User model used to create a user in the database
// const User = require('./models/User');
// const Checklist = require('./models/checklist');

//If the database is connected successfully
// db.authenticate()
//     .then(()=>console.log('Database connected'))
//     .catch(err => console.log('Error: ' + err));//If the database is not connected successfully


//Backend route to send user details to the back-end database
// app.post('/', (req, res) => {
      
//     //Take the name field from the input request
//     const { name } = req.body;
//     console.log('Data sending: '+ name);

//     // If the field is not present in the request body
//     if(!name){
//         res.status(500).json({msg: 'Please enter all fields'});
//     }

//     //Otherwise we can create a user record using the model (line 10) and it is sent to the back-end database (MySQL)
//     User.create({name})
//         .then( user => res.status(200).json(user))
//         .catch( err => res.status(500).json(err));//If an error is caught

// });

// const port = process.env.PORT || 81;

// app.listen(port, function() {
//     console.log("Listening");
// });