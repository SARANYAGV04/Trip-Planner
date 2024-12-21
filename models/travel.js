// MAIN-FILE-->
//    models>travel.js
//    public> first.css, index.css, second.css
//    routes> mainRouter.js
//    views>first.ejs,index.ejs, second.ejs
// data.json
const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
    destination: { type: String, required: true },
    duration: { type: Number, required: true },
    cost: { type: Number, required: true }
});

const Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;