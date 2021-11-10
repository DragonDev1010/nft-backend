'use strict';

var mongoose = require('mongoose')
var NFT = mongoose.model('nft');

exports.list_all_nfts = function(req, res) {
	var filters = req.query
	var query = {}
	query["status"] = {$in: filters.search.status}
	query["price"] = {$gte: filters.search.price.min, $lte: filters.search.price.max}
	query["collects.name"] = {$in: filters.search.collects}
    NFT.find(
		query, 
		function(err, nft) {
			if (err)
				res.send(err);
			res.json(nft);
    });
}

exports.create_a_nft = function(req, res) {
	console.log(req.body)
	var new_nft = new NFT(req.body)
	new_nft.save(function(err, nft) {
		if(err) 
			res.send(err)
		res.json(nft)
	})
}

exports.read_a_nft = function(req, res) {
	NFT.find({nft_id: req.params.nftId}, function(err, nft) {
		if (err)
		  res.send(err);
		res.json(nft);
	})
	// NFT.findById(req.params.nftId, function(err, nft) {
		
	// });
}

exports.update_a_nft = function(req, res) {
	NFT.findOneAndUpdate({_id: req.params.nftId}, req.body, {new: true}, function(err, nft) {
		if (err)
		  res.send(err);
		res.json(nft);
	});
}

exports.delete_a_nft = function(req, res) {
	NFT.remove({
		_id: req.params.nftId
	  }, function(err, nft) {
		if (err)
		  res.send(err);
		res.json({ message: 'NFT successfully deleted' });
	});
}
