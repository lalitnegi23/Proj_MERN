const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routing = require('./routes/routes');

const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

app.listen(3200,()=>{console.log(`Server running on port 3200`)});

//Middlewares
app.use(express.json());
app.use(cors());
app.use('/api',routing);


mongoose.connect(process.env.PORT,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
} , ()=> console.log('Connected to DB'));