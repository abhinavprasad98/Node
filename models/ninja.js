const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point" 
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

// Create Ninja Scheme and Model
const NinjaSchema = newSchema ({
    name: {
        type: string,
        required: [true, 'Name field is required']
    },

    rank: {
        type: string
    },

    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;