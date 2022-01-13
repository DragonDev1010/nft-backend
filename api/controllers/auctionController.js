'use strict';

var mongoose = require('mongoose')
var Auction = mongoose.model('Auctions');

exports.list_all_auctions = function(req, res) {
    Auction.find(
        function(err, auction) {
            if(err)
                res.send(err)
            res.json(auction)
        }
    )
}
exports.create_a_auction = function(req, res) {
    console.log('Create new auction')
    var newAuction = new Auction(req.body)
    newAuction.save(function(err, auction) {
        if(err)
            res.save(err)
        res.json(auction)
    })
}
exports.read_a_auction = function(req, res) {
    Auction.find(
        {nftId: req.params.nftId},
        function(err, auction) {
            if(err)
                res.send(err)
            res.json(auction)
        }
    )
}
exports.update_a_auction = function(req, res) {
    Auction.findOneAndUpdate(
        {nftId: req.params.nftId},
        req.body,
        {new: true},
        function(err, auction) {
            if(err)
                res.send(err)
            res.json(auction)
        }
    )
}
exports.delete_a_auction = function(req, res) {
    Auction.remove(
        {nftId: req.params.nftId},
        function(err, auction) {
            if(err)
                res.send(err)
            res.json({message: 'Auction is successfully deleted.'})
        }
    )
}