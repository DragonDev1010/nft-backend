'use strict';

var mongoose = require('mongoose')
var Sale = mongoose.model('Sales');

exports.list_all_sales = function(req, res) {
    Sale.find(
        function(err, sale) {
            if(err)
                res.send(err)
            res.json(sale)
        }
    )
}
exports.create_a_sale = function(req, res) {
    console.log('Create new sale')
    var newAuction = new Sale(req.body)
    newAuction.save(function(err, sale) {
        if(err)
            res.save(err)
        res.json(sale)
    })
}
exports.read_a_sale = function(req, res) {
    Sale.find(
        {nftId: req.params.nftId},
        function(err, sale) {
            if(err)
                res.send(err)
            res.json(sale)
        }
    )
}
exports.update_a_sale = function(req, res) {
    Sale.findOneAndUpdate(
        {nftId: req.params.nftId},
        req.body,
        {new: true},
        function(err, sale) {
            if(err)
                res.send(err)
            res.json(sale)
        }
    )
}
exports.delete_a_sale = function(req, res) {
    Sale.remove(
        {nftId: req.params.nftId},
        function(err, sale) {
            if(err)
                res.send(err)
            res.json({message: 'Sale is successfully deleted.'})
        }
    )
}