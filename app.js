const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const mainRouter = require('./routes/mainRouter');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/travel', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
console.log('Connected to MongoDB');

// Setting EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// router
app.use('/', mainRouter);

app.listen(PORT, () => {    
    console.log(`Server is running on http://localhost:${PORT}`);
});