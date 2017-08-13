var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type: string, required: true},
    title: {type: string, required: true},
    price: {type: Number, required: true}
});

module.exports = mongoose.model('Product', schema);