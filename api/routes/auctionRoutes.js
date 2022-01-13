'use strict'
module.exports = function(app) {
    var auction = require('../controllers/auctionController')

    app.route('/auctions')
        .get(auction.list_all_auctions)
        .post(auction.create_a_auction)
    app.route('/auctions/:nftId')
        .get(auction.read_a_auction)
        .put(auction.update_a_auction)
        .delete(auction.delete_a_auction)
}