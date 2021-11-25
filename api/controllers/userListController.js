'use strict';


var mongoose = require('mongoose'),
  	User = mongoose.model('Users');
const fs = require('fs')
exports.list_all_users = function(req, res) {
	User.find({}, function(err, user) {
		if (err)
			res.send(err);
		res.json(user);
	});
};

exports.create_a_user = function(req, res) {
	var new_user = new User(req.body);
	new_user.save(function(err, user) {
		if (err)
			res.send(err);
		res.json(user);
	});
};


exports.read_a_user = function(req, res) {
	User.find({userId: req.params.userId}, function(err, user) {
		if (err)
			res.send(err);
		res.json(user);
	});
};


exports.update_a_user = async function(req, res) {
	let bgImgPath = process.env.PWD + '/usersImg/' + req.params.userId + '_bgImg.jpg'
	let bgImgFile = req.files.bgImg 
	await bgImgFile.mv(bgImgPath, async (err) => {
		if (err) {
			console.log('Error: failed to download file')
			return res.status(500).send(err);
		} 
		let bgImg = {
			data: fs.readFileSync(bgImgPath),
			contentType: 'image/jpg'
		}
		req.body.bgImg = bgImg
		User.findOneAndUpdate({userId: req.params.userId}, req.body, {new: true}, function(err, user) {
			if (err)
				res.send(err);
			res.json(user);
		});
	})
	
};

exports.update_fav = function(req, res) {
	User.findOneAndUpdate({userId: req.params.userId}, {favNftIds: req.body.favNftIds}, function(err, user) {
		if (err)
			res.send(err);
		res.json(user);
	});
}

exports.findByWallet = function(req, res) {
	console.log(req.params.walletAddress, ' : ', typeof(req.params.walletAddress))
	User.find({walletAddress: req.params.walletAddress}, function(err, user) {
		if(err)
			res.send(err)
		res.json(user)
	})
}
exports.delete_a_user = function(req, res) {
	User.remove({
		_id: req.params.userId
	}, function(err, user) {
		if (err)
			res.send(err);
		res.json({ message: 'User successfully deleted' });
	});
};
