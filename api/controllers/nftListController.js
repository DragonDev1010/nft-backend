'use strict';

var mongoose = require('mongoose')
var NFT = mongoose.model('nft');
exports.list_all_nfts = function(req, res) {
	var filters = req.query
	var query = {}
	// localhost:8000/nfts?search[collects][0]=Tiger&search[status][0]=0&search[status][1]=1&search[price][min]=0.04&search[price][max]=0.07
	if(filters.search !== undefined) {
		if(filters.search.status !== undefined) {
			query["status"] = {$in: filters.search.status}
		}
		if(filters.search.price !== undefined) {
			query["price"] = {$gte: filters.search.price.min, $lte: filters.search.price.max}
		}
		// {"collects.name": {$in: ['Bear']}}
		if(filters.search.collects !== undefined) {
			query["collects.name"] = {$in: filters.search.collects}
		}
		if(filters.search.category !== undefined) {
			query["category"] = {$in: filters.search.category}
		}
		// query["collects.name"] = {$in: filters.search.collects}
		
	}
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
