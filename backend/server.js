const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI);


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});

const db = mongoose.connection;
db.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const postsRouter = require('./routes/route')
app.use('/posts', postsRouter)


