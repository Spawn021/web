const express = require("express");
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//middleware
app.use(express.json());

// set the view engine to use hbs
app.set('view engine', 'hbs');

// set the path for views and layouts
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials');

// set the layout for all views
app.set('view options', { layout: 'layouts/main' });

const blogRouter = require("./routes/BlogRoutes");
app.use("/", blogRouter);

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});

module.exports = app;

const mongoose = require("mongoose");
//configure mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb+srv://it4409:it4409-soict@lamdb-crud.qd3s7vv.mongodb.net/Group15?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)