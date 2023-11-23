let mongoose = require('mongoose');

// create a model class
let concertModel = mongoose.Schema({
    Artist:String,
    Genre:String,
    Venue:String,
    Date:String,
    Ticket_Price: String,
    Start_Time: String
},
{
    collection:"concerts"
});
module.exports = mongoose.model('Concert',concertModel);
