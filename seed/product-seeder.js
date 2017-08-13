var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'http://www3.assets-gap.com/webcontent/0013/920/757/cn13920757.jpg',
        title: 'Grant Slim-Fit Supima',
        price: 79
    }),
    new Product({
        imagePath: 'http://www2.assets-gap.com/webcontent/0013/745/798/cn13745798.jpg',
        title: 'Cotton Solid Shirt',
        price: 89
    }),
    new Product({
        imagePath: 'http://www3.assets-gap.com/webcontent/0013/882/550/cn13882550.jpg',
        title: 'Silk Cotton Cashmere Vee',
        price: 56
    }),
    new Product({
        imagePath: 'http://www4.assets-gap.com/webcontent/0013/880/907/cn13880907.jpg',
        title: 'Cotton Cashmere Full-Zip Sweater Jacket',
        price: 115
    }),
    new Product({
        imagePath: 'http://www3.assets-gap.com/webcontent/0013/920/543/cn13920543.jpg',
        title: 'Hadley Brogue Oxford',
        price: 158
    }),
    new Product({
        imagePath: 'http://www3.assets-gap.com/webcontent/0013/011/903/cn13011903.jpg',
        title: 'Ricky Boat Shoe with Vibram® Sole',
        price: 65
    }),
];


var done = 0;
for(var i=0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if(done === products.length) {
            exit()
        }
    })
}

function exit() {
    mongoose.disconnect();
}

