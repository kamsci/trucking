var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = requpre('mongoose-unique-validator');

var jobSchema = new Schema({
    title: { type: String, required: true },
    referenceId: { type: String, required: true, unique: true },
    jobComplete: { type: Boolean },
    stops: [{
        stopType: { type: String },
        cargoDescription: { type: String },
        arrivalTime: { type: Date },
        picture: { type: String },
        ladingType: { type: String },
        ladingComplete: { type: Boolean },
        stopComplete: { type: Boolean }
    }]
});

jobSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Job', jobSchema);