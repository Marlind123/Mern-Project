const express = require('express');
const cors = require('cors');
const app = express();
// const socket = require('socket.io');


app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
require('./config/mongoose.config'); 

const AllMyUserRoutes = require("./routes/user.route");
AllMyUserRoutes(app);

const server=app.listen(8000, () => console.log(`Listening on port: 8000`) );

