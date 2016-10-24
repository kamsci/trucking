var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
    title: { type: String, required: true },
    referenceId: { type: Number, required: true },
    jobComplete: { type: Boolean },
    stops: [{
        stopType: { type: String },
        cargoDescription: { type: String },
        arrivalTime: { type: String },
        picture: { type: String },
        ladingType: { type: String },
        ladingComplete: { type: Boolean },
        stopComplete: { type: Boolean }
    }]
})

module.exports = mongoose.model('Job', jobSchema);