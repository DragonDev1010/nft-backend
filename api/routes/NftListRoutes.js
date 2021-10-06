'use strict'
module.exports = function(app) {
    var nftList = require('../controllers/nftListController')

    app.route('/nfts')
        .get(nftList.list_all_nfts)
        .post(nftList.create_a_nft)

    app.route('/nfts/:nftId')
        .get(nftList.read_a_nft)
        .put(nftList.update_a_nft)
        .delete(nftList.delete_a_nft)
}